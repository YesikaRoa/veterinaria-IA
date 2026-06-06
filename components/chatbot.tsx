"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, Bot, User, PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { generateChatResponse, Message } from "@/lib/gemini"
import { cn } from "@/lib/utils"

function formatMessageContent(content: string, isUserMessage: boolean) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];
  let isInsideList = false;

  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong
            key={index}
            className={cn(
              "font-bold",
              isUserMessage ? "text-white" : "text-green-700 dark:text-green-400"
            )}
          >
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  lines.forEach((line, index) => {
    const bulletMatch = line.match(/^[\s]*[\*\-•]\s+(.*)/);

    if (bulletMatch) {
      const itemContent = bulletMatch[1];
      isInsideList = true;
      currentList.push(
        <li key={`li-${index}`} className="list-disc ml-5 mt-1 leading-relaxed">
          {renderTextWithBold(itemContent)}
        </li>
      );
    } else {
      if (isInsideList && currentList.length > 0) {
        elements.push(
          <ul key={`ul-${index}`} className="my-1.5 space-y-1">
            {currentList}
          </ul>
        );
        currentList = [];
        isInsideList = false;
      }

      if (line.trim() === '') {
        if (elements.length > 0) {
          elements.push(<div key={`space-${index}`} className="h-2" />);
        }
      } else {
        elements.push(
          <p key={`p-${index}`} className="leading-relaxed my-1">
            {renderTextWithBold(line)}
          </p>
        );
      }
    }
  });

  if (isInsideList && currentList.length > 0) {
    elements.push(
      <ul key="ul-end" className="my-1.5 space-y-1">
        {currentList}
      </ul>
    );
  }

  return <div className="space-y-0.5 break-words">{elements}</div>;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)
  const chatbotRef = useRef<HTMLDivElement>(null)

  // Cargar historial
  useEffect(() => {
    const saved = localStorage.getItem('petcare_chat_history')
    if (saved) {
      try {
        setMessages(JSON.parse(saved))
      } catch {
        setMessages([{ id: "welcome-1", role: "assistant", content: "¡Hola! Soy PetCare AI 🐾. ¿En qué puedo ayudarte a cuidar de tu peludito hoy?" }])
      }
    } else {
      setMessages([{ id: "welcome-1", role: "assistant", content: "¡Hola! Soy PetCare AI 🐾. ¿En qué puedo ayudarte a cuidar de tu peludito hoy?" }])
    }
    setIsInitialized(true)
  }, [])

  // Guardar historial
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('petcare_chat_history', JSON.stringify(messages))
    }
  }, [messages, isInitialized])

  // Limpiar historial al salir de la página
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('petcare_chat_history')
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  // Click outside para cerrar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Auto-scroll al final cuando hay nuevos mensajes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault()

    if (!inputValue.trim()) return

    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim()
    }

    setMessages((prev) => [...prev, newUserMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulamos la llamada a la API
    try {
      // Pasamos el historial previo (sin incluir el mensaje actual, que se pasa como segundo argumento)
      const response = await generateChatResponse(messages, inputValue.trim())

      const newAssistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response
      }

      setMessages((prev) => [...prev, newAssistantMessage])
    } catch (error) {
      console.error("Error al obtener respuesta de la IA:", error)
      const errorMsg = error instanceof Error ? error.message : "Lo siento, ocurrió un error inesperado."

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: errorMsg
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" ref={chatbotRef}>
      {/* Ventana de chat */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out origin-bottom-right mb-4",
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10 pointer-events-none"
        )}
      >
        <Card className="w-80 sm:w-96 h-[500px] shadow-2xl flex flex-col border-green-600/20">
          <CardHeader className="bg-green-600 text-white flex flex-row items-center justify-between py-3 px-4 rounded-t-xl space-y-0">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <CardTitle className="text-base font-medium">PetCare AI</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-green-700 hover:text-white h-8 w-8 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} />
              <span className="sr-only">Cerrar chat</span>
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30" ref={scrollRef}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex w-full",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div className={cn(
                  "flex max-w-[80%] items-start gap-2",
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                )}>
                  <div className={cn(
                    "flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center",
                    message.role === "user" ? "bg-green-600 text-white" : "bg-muted text-muted-foreground"
                  )}>
                    {message.role === "user" ? <User size={14} /> : <Bot size={14} />}
                  </div>

                  <div className={cn(
                    "px-4 py-2.5 rounded-2xl text-[15px] shadow-sm relative",
                    message.role === "user"
                      ? "bg-green-600 text-white rounded-br-none"
                      : "bg-background border border-border rounded-bl-none text-foreground"
                  )}>
                    {formatMessageContent(message.content, message.role === "user")}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex w-full justify-start">
                <div className="flex max-w-[80%] items-start gap-2 flex-row">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-muted text-muted-foreground">
                    <Bot size={14} />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-background border border-border rounded-tl-sm shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="p-3 bg-background border-t">
            <form
              onSubmit={handleSendMessage}
              className="flex w-full items-center space-x-2"
            >
              <Input
                type="text"
                placeholder="Escribe tu mensaje..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 focus-visible:ring-green-600"
                disabled={isTyping}
              />
              <Button type="submit" size="icon" disabled={!inputValue.trim() || isTyping} className="rounded-full flex-shrink-0">
                <Send size={16} className="ml-1" />
                <span className="sr-only">Enviar mensaje</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 bg-green-600 hover:bg-green-700 text-white",
          isOpen ? "rotate-90 scale-0 opacity-0 pointer-events-none absolute" : "rotate-0 scale-100 opacity-100"
        )}
      >
        <PawPrint size={28} />
        <span className="sr-only">Abrir chat</span>
      </Button>
    </div>
  )
}

"use server"

import { GoogleGenerativeAI } from "@google/generative-ai";

export type Role = 'user' | 'assistant';

export interface Message {
  id: string;
  role: Role;
  content: string;
}

const systemPrompt = `Eres PetCare AI, un asistente especializado en perros y gatos para Kindred Pet Care.

Tus responsabilidades son:
* Responder preguntas sobre perros y gatos.
* Ayudar con alimentación, higiene, comportamiento y cuidados generales.
* Explicar conceptos de salud animal de forma educativa.
* Recomendar servicios de Kindred Pet Care cuando sea apropiado.
* Mantener un tono amable y profesional.
* Recordar el contexto de la conversación.
* Hacer preguntas de seguimiento cuando falte información.

Restricciones:
* Nunca diagnostiques enfermedades.
* Nunca recetes medicamentos.
* Nunca sustituyas la opinión de un veterinario.
* Si detectas síntomas preocupantes (tos persistente, dificultad respiratoria, convulsiones, sangrado, vómitos frecuentes, pérdida de conciencia, etc.) indica que debe acudir a un veterinario.

Ejemplos:

Usuario: Mi perro tiene tos.
Respuesta: La tos puede tener varias causas. ¿Desde cuándo presenta la tos? ¿Es frecuente o solo ocasional? Si notas dificultad para respirar o empeoramiento, consulta con un veterinario.

Usuario: Mi perro bota mucho pelo.
Respuesta: La pérdida de pelo puede ser normal dependiendo de la raza y la época del año. ¿Has notado zonas sin pelo, irritación o picazón?`;

/**
 * Server Action que interactúa con Google Gemini de forma segura.
 * Recibe el historial de mensajes (excepto el actual si se prefiere) y el mensaje actual.
 */
export async function generateChatResponse(history: Message[], currentMessage: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY no está configurada en las variables de entorno.");
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Usar el modelo recomendado para texto y chat
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",  
      systemInstruction: systemPrompt 
    });

    // Mapear el historial al formato que espera Gemini
    // Gemini usa "user" y "model" como roles
    const formattedHistory = history.map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    // El historial para Gemini DEBE empezar con un mensaje de 'user'.
    // Si el historial empieza con un saludo del 'model', lo removemos.
    while (formattedHistory.length > 0 && formattedHistory[0].role === 'model') {
      formattedHistory.shift();
    }

    // Iniciar el chat con el historial previo
    const chat = model.startChat({
      history: formattedHistory,
    });

    // Enviar el nuevo mensaje
    const result = await chat.sendMessage(currentMessage);
    const responseText = result.response.text();
    
    return responseText;
  } catch (error) {
    console.error("Error en generateChatResponse:", error);
    throw new Error("Lo siento, tuve un problema al procesar tu solicitud. ¿Podrías intentar de nuevo?");
  }
}

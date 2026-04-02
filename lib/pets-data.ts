export interface Pet {
  id: string
  name: string
  age: string
  breed: string
  type: "canino" | "felino"
  description: string
  shortDescription: string
  image: string
  gallery: string[]
  status: "disponible" | "en proceso" | "adoptado"
  vaccines: string
  neutered: boolean
  microchip: boolean
  character: string
  story: string
}

export const pets: Pet[] = [
  {
    id: "max",
    name: "Max",
    age: "2 años",
    breed: "Labrador Mix",
    type: "canino",
    description: "Un compañero leal, juguetón y lleno de energía esperando aventuras.",
    shortDescription: "Un compañero leal, juguetón y lleno de energía esperando aventuras.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&h=400&fit=crop",
    ],
    status: "disponible",
    vaccines: "Al día",
    neutered: true,
    microchip: true,
    character: "Sociable",
    story: "Max no es solo un perro; es un rayo de sol con cuatro patas. Fue rescatado de una zona industrial donde, a pesar de las dificultades, nunca perdió su fe en los humanos. Es el tipo de compañero que te recibirá con un juguete en la boca y una cola que no deja de moverse ni un segundo.\n\nLe encanta correr por el césped, pero su actividad favorita es simplemente estar cerca de las personas. Es increíblemente paciente con los niños y se lleva de maravilla con otros perros. Si buscas un amigo leal que convierta cada paseo en una aventura y cada tarde de lluvia en un momento de paz, Max está esperando por ti."
  },
  {
    id: "luna",
    name: "Luna",
    age: "1 año",
    breed: "Gato Doméstico",
    type: "felino",
    description: "Tranquila y cariñosa, Luna busca un rincón acogedor en tu corazón.",
    shortDescription: "Tranquila y cariñosa, Luna busca un rincón acogedor en tu corazón.",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=400&fit=crop",
    ],
    status: "disponible",
    vaccines: "Al día",
    neutered: true,
    microchip: true,
    character: "Tranquila",
    story: "Luna llegó a nosotros siendo apenas una gatita asustada, encontrada en las calles del centro de la ciudad. Con paciencia y amor, se transformó en la gata más dulce que puedas imaginar. Le encanta acurrucarse junto a la ventana observando el mundo exterior.\n\nEs perfecta para hogares tranquilos donde pueda recibir mimos y cariño. Si buscas una compañera que te espere en la puerta y ronronee mientras lees un libro, Luna es tu alma gemela felina."
  },
  {
    id: "toby",
    name: "Toby",
    age: "3 años",
    breed: "Beagle Mix",
    type: "canino",
    description: "Siempre activo y listo para el parque. Toby es el alma de la fiesta.",
    shortDescription: "Siempre activo y listo para el parque. Toby es el alma de la fiesta.",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&h=400&fit=crop",
    ],
    status: "disponible",
    vaccines: "Al día",
    neutered: true,
    microchip: false,
    character: "Energético",
    story: "Toby es la definición de energía pura. Este beagle mix fue rescatado de un refugio saturado donde su espíritu alegre brillaba incluso en las condiciones más difíciles. Su nariz siempre está en acción, explorando cada rincón.\n\nIdeal para familias activas que disfruten de caminatas largas y juegos al aire libre. Toby te mantendrá en forma y te hará sonreír todos los días con sus travesuras."
  },
  {
    id: "mia",
    name: "Mía",
    age: "4 años",
    breed: "Gato Siamés Mix",
    type: "felino",
    description: "Elegante y curiosa, Mía observa todo con sus hermosos ojos azules.",
    shortDescription: "Elegante y curiosa, Mía observa todo con sus hermosos ojos azules.",
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=400&h=400&fit=crop",
    ],
    status: "disponible",
    vaccines: "Al día",
    neutered: true,
    microchip: true,
    character: "Curiosa",
    story: "Mía es una gata siamés mix con una personalidad única. Fue entregada a nuestro refugio cuando su familia anterior tuvo que mudarse. A pesar del cambio, Mía mantiene su espíritu curioso y elegante.\n\nLe encanta explorar espacios altos y observar todo desde su reino elevado. Busca un hogar donde pueda ser la reina del castillo y recibir toda la atención que merece."
  },
  {
    id: "rocky",
    name: "Rocky",
    age: "5 años",
    breed: "Pastor Alemán",
    type: "canino",
    description: "Protector y noble, Rocky será tu guardián más fiel.",
    shortDescription: "Protector y noble, Rocky será tu guardián más fiel.",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1553882809-a4f57e59501d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1605725657590-3e1e90644a16?w=400&h=400&fit=crop",
    ],
    status: "disponible",
    vaccines: "Al día",
    neutered: true,
    microchip: true,
    character: "Protector",
    story: "Rocky es un pastor alemán de 5 años con un corazón de oro. Fue entrenado como perro de trabajo pero fue retirado debido a una lesión menor que ya está completamente sanada. Es increíblemente inteligente y leal.\n\nBusca un hogar con espacio donde pueda hacer ejercicio y una familia que aprecie su naturaleza protectora. Rocky es excelente con niños y será el guardián perfecto de tu hogar."
  },
  {
    id: "coco",
    name: "Coco",
    age: "6 meses",
    breed: "Gato Naranja",
    type: "felino",
    description: "Pequeña, traviesa y llena de amor. Coco iluminará tus días.",
    shortDescription: "Pequeña, traviesa y llena de amor. Coco iluminará tus días.",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&h=400&fit=crop",
    ],
    status: "disponible",
    vaccines: "Al día",
    neutered: false,
    microchip: false,
    character: "Juguetona",
    story: "Coco es una gatita naranja de apenas 6 meses que llegó a nosotros siendo una bebé huérfana. Fue criada con biberón y mucho amor por nuestros voluntarios, lo que la hace increíblemente sociable y cariñosa con las personas.\n\nLe encanta jugar con cualquier cosa que se mueva y sus travesuras te sacarán más de una sonrisa. Si buscas alegría pura en forma de bolita peluda, Coco es tu compañera ideal."
  },
  {
    id: "bruno",
    name: "Bruno",
    age: "4 años",
    breed: "Golden Retriever",
    type: "canino",
    description: "Amigable y cariñoso, Bruno es el mejor amigo que podrías desear.",
    shortDescription: "Amigable y cariñoso, Bruno es el mejor amigo que podrías desear.",
    image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=600&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1612774412771-005ed8e861d2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&h=400&fit=crop",
    ],
    status: "disponible",
    vaccines: "Al día",
    neutered: true,
    microchip: true,
    character: "Amigable",
    story: "Bruno es un golden retriever con el corazón más grande que puedas imaginar. Fue rescatado de una situación de negligencia, pero su espíritu amoroso nunca se apagó. Es el perro perfecto para familias con niños.\n\nLe encanta nadar, jugar a buscar y, sobre todo, dar amor incondicional. Bruno transformará tu hogar en un lugar más feliz desde el primer día."
  },
  {
    id: "nina",
    name: "Nina",
    age: "2 años",
    breed: "Gato Persa",
    type: "felino",
    description: "Dulce y serena, Nina busca un hogar tranquilo lleno de mimos.",
    shortDescription: "Dulce y serena, Nina busca un hogar tranquilo lleno de mimos.",
    image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=600&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=400&fit=crop",
    ],
    status: "disponible",
    vaccines: "Al día",
    neutered: true,
    microchip: true,
    character: "Serena",
    story: "Nina es una gata persa de 2 años con un pelaje espectacular y una personalidad tranquila. Llegó a nosotros cuando sus dueños ya no podían cuidarla debido a cambios en su vida.\n\nEs perfecta para personas que buscan una compañera calmada que disfrute de las tardes tranquilas. Nina necesita cepillado regular y mucho amor, y a cambio te dará ronroneos infinitos."
  }
]

export function getPetById(id: string): Pet | undefined {
  return pets.find(pet => pet.id === id)
}

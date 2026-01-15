
import { Service } from './types';

export const BUSINESS_INFO = {
  name: "Portal de Belleza",
  phone: "3128096947",
  whatsappUrl: "https://wa.me/573128096947?text=Hola,%20deseo%20reservar%20una%20cita%20en%20Portal%20de%20Belleza",
  email: "paula.7901@hotmail.com",
  instagram: "Portaldebelleza2",
  instagramUrl: "https://www.instagram.com/Portaldebelleza2",
  address: "Transversal 4a diagonal 75d-45, bloque 5 local 110, urbanización portales del sol, Belén la Mota, Medellín",
  getServiceWhatsapp: (serviceName: string) => `https://wa.me/573128096947?text=Hola,%20vengo%20desde%20la%20web%20y%20deseo%20informaci%C3%B3n%20sobre%3A%20${encodeURIComponent(serviceName)}`
};

export const SERVICES: Service[] = [
  {
    id: 'sueroterapia',
    category: 'Bienestar',
    title: 'Sueroterapia y Medicina Ortomolecular',
    description: 'Tratamientos personalizados para todo tipo de enfermedades, fortalecimiento del sistema inmune y revitalización celular.',
    image: 'https://images.unsplash.com/photo-1579152276507-24aa6f376f2d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'bioestimuladores',
    category: 'Facial',
    title: 'Bioestimuladores de Colágeno',
    description: 'Sculptra, Radiesse, Esperma de Salmón y Exosomas para una piel radiante y rejuvenecida.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'fullface',
    category: 'Facial',
    title: 'Full Face & Perfilamiento',
    description: 'Armonización facial con ácido hialurónico, perfilamiento de labios y técnicas híbridas avanzadas.',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'lifting',
    category: 'Avanzado',
    title: 'Lifting sin Cirugía',
    description: 'HIFU, Fibroblast, Hilos Tensores y Radiofrecuencia Fraccionada para tensado cutáneo inmediato.',
    image: 'https://images.unsplash.com/photo-1629732047847-50bad7558259?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'lipo',
    category: 'Corporal',
    title: 'Moldeo Corporal y Celulitis',
    description: 'Lipo sin cirugía, tratamiento de estrías y tonificación avanzada con Tensamax.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'masaje',
    category: 'Bienestar',
    title: 'Masaje de Relajación',
    description: 'Experiencia sensorial única para liberar estrés y armonizar cuerpo y mente.',
    image: 'https://images.unsplash.com/photo-1544161515-4af6b1d4640b?auto=format&fit=crop&w=1000&q=80'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Carolina Mendoza",
    treatment: "Full Face & Perfilamiento",
    quote: "Me encantó el resultado, buscaba algo natural y superaron mis expectativas. La atención es impecable y te explican cada paso del proceso.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 2,
    name: "Andrés Villa",
    treatment: "Sueroterapia Vital",
    quote: "Increíble cómo mejoró mi energía con la medicina ortomolecular. El espacio es muy acogedor y profesional. Recomendado al 100%.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 3,
    name: "Valentina Restrepo",
    treatment: "Moldeo con Tensamax",
    quote: "He visto cambios reales en mi piel y la reducción de celulitis desde la tercera sesión. La tecnología que usan realmente marca la diferencia.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80"
  }
];

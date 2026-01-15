
import { GoogleGenAI, Type } from "@google/genai";
import { ModelType } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    try {
      const chat = this.ai.chats.create({
        model: ModelType.PRO,
        config: {
          systemInstruction: `Eres "Belleza AI", el asistente experto de "Portal de Belleza" en Medellín. 
          Tu objetivo es informar sobre nuestros servicios: Sueroterapia, Medicina Ortomolecular, Bioestimuladores (Sculptra, Radiesse), 
          Full Face, HIFU, Hilos tensores, y tratamientos corporales como Lipo sin cirugía y Tensamax.
          Somos profesionales que velamos por el bienestar de los clientes usando la mejor tecnología.
          Ubicación: Belén la Mota, Medellín. 
          Siempre invita al usuario a agendar por WhatsApp al 3128096947. 
          Sé amable, profesional y elegante. Responde en español de forma concisa.`,
        }
      });

      const result = await chat.sendMessage({ message });
      return result.text;
    } catch (error) {
      console.error("Gemini Chat Error:", error);
      return "Lo siento, tuve un problema al procesar tu consulta. ¿Podrías intentarlo de nuevo o contactarnos por WhatsApp?";
    }
  }

  async getMapsInfo(query: string, location?: { lat: number, lng: number }) {
    try {
      const response = await this.ai.models.generateContent({
        model: ModelType.FLASH_MAPS,
        contents: query,
        config: {
          tools: [{ googleMaps: {} }],
          toolConfig: {
            retrievalConfig: {
              latLng: location ? { latitude: location.lat, longitude: location.lng } : undefined
            }
          }
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Maps Error:", error);
      return null;
    }
  }
}

export const geminiService = new GeminiService();

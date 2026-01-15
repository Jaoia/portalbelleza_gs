
export interface Service {
  id: string;
  category: 'Facial' | 'Corporal' | 'Bienestar' | 'Avanzado';
  title: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum ModelType {
  PRO = 'gemini-3-pro-preview',
  FLASH = 'gemini-3-flash-preview',
  FLASH_LITE = 'gemini-2.5-flash-lite-latest',
  FLASH_MAPS = 'gemini-2.5-flash'
}

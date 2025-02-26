import { create } from "zustand";
import { translateAI } from "../services/translate-ai";
import { InputFormInterface } from "../interfaces/input-form.interface";

type ChatProviderType = {
  translation: string,
  translate: (data: InputFormInterface) => Promise<void>
}

export const chatProvider = create<ChatProviderType>((set) => ({
  translation: "Waiting for your text...",
  translate: async (data: InputFormInterface) => {
    const response = await translateAI(data);
    set({ translation: response });
  },
}));

"use client";

import { InputFormValidation } from "../schema/input-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { chatProvider } from "../context/chat-provider";

export function useChat() {
  const translate = chatProvider((state) => state.translate);

  const inputForm = useForm<z.infer<typeof InputFormValidation>>({
    resolver: zodResolver(InputFormValidation),
  });

  async function onSubmit(data: z.infer<typeof InputFormValidation>) {
    translate(data);
  }

  return { inputForm, onSubmit };
}

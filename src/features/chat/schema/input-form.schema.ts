import { z } from "zod"

export const InputFormValidation = z.object({
  message: z.string().max(2000),
  lang: z.string(),
  accurancy: z.string()
})
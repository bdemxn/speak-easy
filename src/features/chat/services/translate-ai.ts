"use server"

import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { generateText } from "ai"
import { InputFormInterface } from "../interfaces/input-form.interface"

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
  baseURL: "https://generativelanguage.googleapis.com/v1beta"
})

export async function translateAI(props: InputFormInterface) {
  const { text } = await generateText({
    model: google("gemini-1.5-flash-8b"),
    prompt: `Translate the following text: "${props.message}", to ${props.lang} with ${props.accurancy} vocabulary.`
  })

  return text
}
import { defineConfig  } from "drizzle-kit"

export default defineConfig({
  out: "./src/database/migrations",
  schema: "./src/database/schemas/schema.ts",
  dialect: "sqlite",

  dbCredentials: {
    url: process.env.DATABASE_URL!
  }
})
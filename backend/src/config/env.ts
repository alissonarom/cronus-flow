import 'dotenv/config'

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  MONGO_URI: process.env.MONGO_URI!,
  MONGO_DB: process.env.MONGO_DB!,
  JWT_SECRET: process.env.JWT_SECRET  || 'dev-secret',
  DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY!
}

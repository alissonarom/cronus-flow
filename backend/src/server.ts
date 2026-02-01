import { connectMongo } from './infra/mongo.js'
import { buildApp } from './app.js'
import { env } from './config/env.js'

await connectMongo()
const app = buildApp()

app.listen({ port: env.PORT, host: '0.0.0.0' })

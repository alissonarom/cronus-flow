import mongoose from 'mongoose'
import { env } from '../config/env.js'

export async function connectMongo() {
  await mongoose.connect(env.MONGO_URI, {
    dbName: env.MONGO_DB
  })
  console.log('✅ Mongo conectado')
}

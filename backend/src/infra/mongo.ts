import mongoose from 'mongoose'
import { env } from '../config/env.js'

export async function connectMongo() {
  if (!env.MONGO_URI) {
    throw new Error('MONGO_URI not defined')
  }

  await mongoose.connect(env.MONGO_URI)
  console.log('✅ MongoDB connected')
}

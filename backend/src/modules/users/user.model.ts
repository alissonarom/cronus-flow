import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,

    dailyCount: { type: Number, default: 0 },
    lastReset: { type: Date, default: () => new Date() }
  },
  { timestamps: true }
)

export const User = mongoose.model('User', userSchema)

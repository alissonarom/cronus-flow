import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },

    plan: {
      type: String,
      default: 'trial' // trial | paid
    },

    dailyUsage: {
      type: Number,
      default: 0
    },

    lastUsageReset: {
      type: Date,
      default: () => new Date()
    }
  },
  { timestamps: true }
)

export const User = mongoose.model('User', UserSchema)

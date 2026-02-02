import { Schema, model } from 'mongoose'

const UsageSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    date: {
      type: String, // YYYY-MM-DD
      required: true,
      index: true
    },
    count: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)

UsageSchema.index({ userId: 1, date: 1 }, { unique: true })

export const Usage = model('Usage', UsageSchema)

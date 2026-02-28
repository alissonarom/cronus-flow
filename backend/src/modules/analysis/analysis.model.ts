import { Schema, model, Types } from 'mongoose'

const AnalysisSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },

    input: {
      type: String,
      required: true
    },

    output: {
      type: String,
      required: true
    },

    provider: {
      type: String,
      default: 'Gemini'
    },

    converted: { 
      type: Boolean,
      default: null
      },

    feedbackAt: { type: Date }
  },
  {
    timestamps: true
  }
)

export const Analysis = model('Analysis', AnalysisSchema)

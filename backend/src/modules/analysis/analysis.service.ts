import { Analysis } from './analysis.model.js'

type CreateAnalysisParams = {
  userId: string
  input: string
  output: string
}

export async function saveAnalysis({
  userId,
  input,
  output
}: CreateAnalysisParams) {
  return Analysis.create({
    userId,
    input,
    output
  })
}

export async function listUserAnalyses(userId: string, limit = 20) {
  return Analysis.find({ userId })
    .sort({ createdAt: -1 })
    .limit(limit)
}

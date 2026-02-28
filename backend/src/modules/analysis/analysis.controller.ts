import { Analysis } from './analysis.model.js'
import { listUserAnalyses } from './analysis.service.js'

export async function listMyAnalysesController(request: any) {
  const userId = request.user!.userId

  const analyses = await listUserAnalyses(userId)

  return analyses
}

export async function getFeedbackCount(request: any, reply: any) {
  const userId = request.user.userId

  const count = await Analysis.countDocuments({
    userId,
    converted: { $ne: null }
  })

  return reply.send({ count })
}

import { FastifyRequest, FastifyReply } from 'fastify'
import { Analysis } from '../analysis/analysis.model.js'

export async function registerFeedback(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { analysisId, converted } = request.body as any
  const userId = request.user!.userId

  const analysis = await Analysis.findById(analysisId)

  if (!analysis) {
    return reply.code(404).send({ message: 'Analysis not found' })
  }

  analysis.converted = converted
  analysis.feedbackAt = new Date()

  await analysis.save()

  return reply.send({ success: true })
}
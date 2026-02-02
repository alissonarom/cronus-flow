import { FastifyReply, FastifyRequest } from 'fastify'
import { generateSalesReply } from '../ai/ai.service.js'
import { checkAndIncrementUsage } from '../usage/usage.service.js'
import { saveAnalysis } from '../analysis/analysis.service.js'

export async function analyzeController(
  request: FastifyRequest<{ Body: { leadMessage: string } }>,
  reply: FastifyReply
) {
  const { leadMessage } = request.body
  const userId = request.user!.userId

  if (!leadMessage) {
    return reply.status(400).send({ error: 'leadMessage is required' })
  }

  try {
    const usage = await checkAndIncrementUsage(userId)
    const replyText = await generateSalesReply({ leadMessage })

    await saveAnalysis({
    userId,
    input: leadMessage,
    output: replyText
  })

    return {
      reply: replyText,
      remaining: usage.remaining
    }
  } catch (err: any) {
    if (err.message === 'DAILY_LIMIT_EXCEEDED') {
      return reply.status(429).send({
        error: 'Daily limit exceeded',
        limit: 50
      })
    }

    if (err.message === 'DEEPSEEK_ERROR') {
      return reply.status(502).send({
        error: 'AI provider error'
      })
    }

    throw err
  }
}

import { FastifyInstance } from 'fastify'
import { registerFeedback } from './feedback.controller.js'

export async function feedbackRoutes(app: FastifyInstance) {
  app.post('/feedback',registerFeedback)
}

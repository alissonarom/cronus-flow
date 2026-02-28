import { FastifyInstance } from 'fastify'
import { login, register } from './auth.controller.js'
import { registerFeedback } from '../feedback/feedback.controller.js'

export async function authRoutes(app: FastifyInstance) {
  app.post('/auth/register', register)
  app.post('/auth/login', login)
  app.post('/feedback',registerFeedback)
}

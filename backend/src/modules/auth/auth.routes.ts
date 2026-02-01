import { FastifyInstance } from 'fastify'
import { login, register } from './auth.controller.js'

export async function authRoutes(app: FastifyInstance) {
  app.post('/auth/register', register)
  app.post('/auth/login', login)
}

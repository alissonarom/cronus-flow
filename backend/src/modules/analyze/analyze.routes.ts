import { FastifyInstance } from 'fastify'
import { analyzeController } from './analyze.controller.js'

export async function analyzeRoutes(app: FastifyInstance) {
  app.post('/analyze', analyzeController)
}

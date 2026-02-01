import { FastifyInstance } from 'fastify'
import { healthRoutes } from './health.routes.js'

export async function registerRoutes(app: FastifyInstance) {
  await healthRoutes(app)
}

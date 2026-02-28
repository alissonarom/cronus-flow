import { FastifyInstance } from 'fastify'
import { healthRoutes } from './health.routes.js'
import { authRoutes } from '../modules/auth/auth.routes.js'
import { protectedTest } from './protected.test.js'
import { privacyRoutes } from './privacy.routes.js'

export async function registerRoutes(app: FastifyInstance) {
  await healthRoutes(app)
  await authRoutes(app)
  await protectedTest(app)
  await privacyRoutes(app)
}

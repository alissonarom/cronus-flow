import Fastify from 'fastify'
import { registerRoutes } from './routes/index.js'
import { jwtMiddleware } from './infra/jwt.middleware.js'
import { analysisRoutes } from './modules/analysis/analysis.routes.js'

export function buildApp() {
  const app = Fastify({
    logger: true
  })
  app.addHook('onRequest', jwtMiddleware)
  registerRoutes(app)
  app.register(analysisRoutes, { prefix: '/v1' })
  return app
}

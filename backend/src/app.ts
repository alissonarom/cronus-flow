import Fastify from 'fastify'
import { registerRoutes } from './routes/index.js'
import { jwtMiddleware } from './infra/jwt.middleware.js'

export function buildApp() {
  const app = Fastify({
    logger: true
  })
  app.addHook('onRequest', jwtMiddleware)
  registerRoutes(app)
  return app
}

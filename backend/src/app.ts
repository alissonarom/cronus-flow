import Fastify from 'fastify'
import { flowRoutes } from './modules/flow/flow.routes.js'
import { registerRoutes } from './routes/index.js'

export function buildApp() {
  const app = Fastify({
    logger: true
  })
  app.register(flowRoutes)
  app.register(registerRoutes)
  return app
}

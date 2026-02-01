import Fastify from 'fastify'
import { flowRoutes } from './modules/flow/flow.routes.js'

export function buildApp() {
  const app = Fastify()
  app.register(flowRoutes)
  return app
}

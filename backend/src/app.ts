import Fastify from 'fastify'
import { registerRoutes } from './routes/index.js'
import { jwtMiddleware } from './infra/jwt.middleware.js'
import { analysisRoutes } from './modules/analysis/analysis.routes.js'
import cors from '@fastify/cors'

export async function buildApp() {
  const app = Fastify({
    logger: true
  })

//   await app.register(cors, {
//   origin: [
//     'https://apps-cronus-flow.ptiotg.easypanel.host',
//     /^chrome-extension:\/\// // 🔴 ESSENCIAL
//   ],
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// });

await app.register(cors, {
  origin: true
});

  app.addHook('onRequest', jwtMiddleware)
  registerRoutes(app)
  app.register(analysisRoutes, { prefix: '/v1' })
  return app
}

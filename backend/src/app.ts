import Fastify from 'fastify'
import { registerRoutes } from './routes/index.js'
import { jwtMiddleware } from './infra/jwt.middleware.js'
import { analysisRoutes } from './modules/analysis/analysis.routes.js'
import { feedbackRoutes } from './modules/feedback/feedback.routes.js'
import cors from '@fastify/cors'

export async function buildApp() {
  const app = Fastify({
    logger: true
  })

await app.register(cors, {
  origin: (origin, cb) => {
    // Chrome Extension
    if (!origin || origin.startsWith('chrome-extension://')) {
      cb(null, true)
      return
    }

    // Domínio do front (se existir)
    if (origin === 'https://apps-cronus-flow.ptiotg.easypanel.host') {
      cb(null, true)
      return
    }

    cb(new Error('Not allowed by CORS'), false)
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

  await registerRoutes(app)

  await app.register(async function protectedRoutes(instance) {
    instance.addHook('onRequest', jwtMiddleware)
    instance.register(analysisRoutes, { prefix: '/v1' })
    instance.register(feedbackRoutes, { prefix: '/v1' })
  })
  
  return app
}

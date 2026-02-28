import { getFeedbackCount, listMyAnalysesController } from './analysis.controller.js'
import { analyzeController } from '../analyze/analyze.controller.js'
import { FastifyInstance } from 'fastify'

export async function analysisRoutes(app: FastifyInstance) {
  app.get('/my-analyses', listMyAnalysesController)
  app.post('/analyze', analyzeController)
  app.get('/feedback/count', getFeedbackCount)
}

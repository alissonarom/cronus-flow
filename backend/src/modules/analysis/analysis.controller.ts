import { listUserAnalyses } from './analysis.service.js'

export async function listMyAnalysesController(request: any) {
  const userId = request.user!.userId

  const analyses = await listUserAnalyses(userId)

  return analyses
}

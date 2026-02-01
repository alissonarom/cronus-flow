import { generateSalesReply } from '../ai/ai.service.js'

import { auth } from '../../middlewares/auth.middleware.js'

export async function flowRoutes(app: any) {
  app.post('/v1/analyze', { preHandler: auth }, async (req: any) => {
    const output = await generateSalesReply({ leadMessage: req.body.message })
    return { output }
  })
}

import { FastifyInstance } from 'fastify'
import { verifyJwt } from '../infra/jwt.js'

export async function protectedTest(app: FastifyInstance) {
  app.get('/me', async (req, reply) => {
    const auth = req.headers.authorization
    if (!auth) return reply.status(401).send({ error: 'No token' })

    const token = auth.replace('Bearer ', '')
    const payload = verifyJwt(token)

    return reply.send(payload)
  })
}

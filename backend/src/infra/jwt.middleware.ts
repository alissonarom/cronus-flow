import { FastifyReply, FastifyRequest } from 'fastify'
import { verifyJwt } from './jwt.js'

const PUBLIC_ROUTES = [
  '/health',
  '/auth/login',
  '/auth/register'
]

export async function jwtMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  if (request.method === 'OPTIONS') {
    return
  }
  const url = request.url.split('?')[0]

  if (PUBLIC_ROUTES.includes(url)) {
    return
  }

  const authHeader = request.headers.authorization
  if (!authHeader) {
    return reply.status(401).send({ error: 'Missing token' })
  }

  const token = authHeader.replace('Bearer ', '')

  try {
    const payload = verifyJwt(token)
    request.user = payload
  } catch {
    return reply.status(401).send({ error: 'Invalid token' })
  }
}

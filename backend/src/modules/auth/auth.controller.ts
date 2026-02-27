import { FastifyReply, FastifyRequest } from 'fastify'
import { loginUser, registerUser } from './auth.service.js'

export async function register(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { email, password } = request.body as any

  const result = await registerUser(email, password)
  return reply.send(result)
}

export async function login(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
  const { email, password } = request.body as any
  const result = await loginUser(email, password)
  return reply.send(result)
  } catch (err) {
    return reply.code(401).send({ message: 'Invalid credentials' })
  }
}

import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'

export async function auth(req: any) {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) throw new Error('UNAUTHORIZED')

  const payload = jwt.verify(token, env.JWT_SECRET) as any
  req.userId = payload.userId
}

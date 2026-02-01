import jwt, { JwtPayload } from 'jsonwebtoken'
import { env } from '../config/env.js'

type JwtData = {
  userId: string
}

export function signJwt(payload: object) {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: '7d'
  })
}

export function verifyJwt(token: string): JwtData {
  const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload

  if (!decoded.userId) {
    throw new Error('Invalid token payload')
  }
  
  return {
    userId: decoded.userId
  }
}

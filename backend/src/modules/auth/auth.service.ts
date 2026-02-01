import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { env } from '../../config/env.js'
import { User } from '../users/user.model.js'

export async function register(email: string, password: string) {
  const hash = await bcrypt.hash(password, 10)
  return User.create({ email, password: hash })
}

export async function login(email: string, password: string) {
  const user = await User.findOne({ email })
  if (!user) throw new Error('INVALID_LOGIN')

  const ok = await bcrypt.compare(password, user.password)
  if (!ok) throw new Error('INVALID_LOGIN')

  return jwt.sign({ userId: user.id }, env.JWT_SECRET, {
    expiresIn: '7d'
  })
}

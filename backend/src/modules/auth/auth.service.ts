import bcrypt from 'bcrypt'
import { User } from '../users/user.model.js'
import { signJwt } from '../../infra/jwt.js'

export async function registerUser(email: string, password: string) {
  const exists = await User.findOne({ email })
  if (exists) throw new Error('User already exists')

  const passwordHash = await bcrypt.hash(password, 10)

  const user = await User.create({
    email,
    passwordHash
  })

  const token = signJwt({ userId: user.id })

  return { token }
}

export async function loginUser(email: string, password: string) {
  const user = await User.findOne({ email })
  console.log('USER:', user)
  if (!user) throw new Error('Invalid credentials')

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) throw new Error('Invalid credentials')

  const token = signJwt({ userId: user.id })

  return { token }
}

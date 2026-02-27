// scripts/resetPassword.ts
import bcrypt from 'bcrypt'
import { connectMongo } from './mongo.js'
import { User } from '../modules/users/user.model.js'

await connectMongo()

const hash = await bcrypt.hash('teste', 10)

await User.updateOne(
  { email: 'seu@email.com' },
  { $set: { password: hash } }
)

console.log('Senha atualizada')
process.exit(0)

import OpenAI from 'openai'
import { env } from '../../config/env.js'
import { User } from '../users/user.model.js'

const client = new OpenAI({
  apiKey: env.DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com'
})

export async function analyze(userId: string, message: string) {
  const user = await User.findById(userId)
  if (!user) throw new Error('USER_NOT_FOUND')

  const today = new Date().toDateString()
  const last = user.lastReset.toDateString()

  if (today !== last) {
    user.dailyCount = 0
    user.lastReset = new Date()
  }

  if (user.dailyCount >= 50) {
    throw new Error('TRIAL_LIMIT')
  }

  const res = await client.chat.completions.create({
    model: 'deepseek-chat',
    temperature: 0.6,
    messages: [{ role: 'user', content: message }]
  })

  user.dailyCount++
  await user.save()

  return res.choices[0].message.content
}

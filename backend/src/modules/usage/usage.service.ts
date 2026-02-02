import { Usage } from './usage.model.js'

const DAILY_LIMIT = 50

function todayKey() {
  return new Date().toISOString().slice(0, 10) // YYYY-MM-DD
}

export async function checkAndIncrementUsage(userId: string) {
  const date = todayKey()

  const usage = await Usage.findOneAndUpdate(
    { userId, date },
    { $inc: { count: 1 } },
    { upsert: true, new: true }
  )

  if (usage.count > DAILY_LIMIT) {
    throw new Error('DAILY_LIMIT_EXCEEDED')
  }

  return {
    remaining: DAILY_LIMIT - usage.count
  }
}

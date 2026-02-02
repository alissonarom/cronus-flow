import { generateSalesReply } from '../ai/ai.service'

export async function analyzeLead(leadMessage: string) {
  const reply = await generateSalesReply({
    leadMessage
  })

  return reply
}

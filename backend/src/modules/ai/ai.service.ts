import { env } from '../../config/env.js'

type GenerateParams = {
  leadMessage: string
  channel?: string
  language?: string
}

export async function generateSalesReply({
  leadMessage
}: GenerateParams): Promise<string> {

  const response = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.DEEPSEEK_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      temperature: 0.6,
      messages: [
        {
          role: 'system',
          content: 'Você é um vendedor consultivo experiente. Gere respostas curtas, claras e persuasivas.'
        },
        {
          role: 'user',
          content: leadMessage
        }
      ]
    })
  })

  if (!response.ok) {
    const err = await response.text()
    console.error('[DeepSeek ERROR]', err)
    throw new Error('DEEPSEEK_ERROR')
  }

  const data = await response.json()
  return data.choices?.[0]?.message?.content ?? ''
}

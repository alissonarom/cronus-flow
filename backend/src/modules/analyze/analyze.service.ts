import { deepseek } from '../../infra/deepseek.js'

export async function analyzeLead(leadMessage: string) {
  const completion = await deepseek.chat.completions.create({
    model: 'deepseek-chat',
    messages: [
      {
        role: 'system',
        content:
          'Você é um especialista em vendas e qualificação de leads. Gere uma resposta objetiva e persuasiva.'
      },
      {
        role: 'user',
        content: leadMessage
      }
    ],
    temperature: 0.7
  })

  return completion.choices[0].message.content
}

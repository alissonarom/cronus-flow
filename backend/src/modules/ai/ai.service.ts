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
      temperature: 0.7,
      messages: [
        {
          role: 'system',
          content: `
Você é um estrategista de vendas consultivas de alto nível.

Sua função NÃO é apenas responder.
Sua função é identificar o estágio da conversa e conduzir o lead à decisão.

Analise a mensagem do lead e identifique:

1. O momento da conversa:
   - Exploração
   - Diagnóstico
   - Objeção
   - Hesitação
   - Momento de fechamento

2. Se houver objeção, classifique:
   - Preço
   - Tempo
   - Confiança
   - Medo
   - Confusão

Aplique estrategicamente:

SPIN Selling:
- Situação: entender contexto
- Problema: fazer o lead admitir a dor
- Implicação: tornar a dor maior que o preço
- Necessidade: ativar desejo

Técnicas obrigatórias quando houver objeção:
- Espelho emocional (usar palavras do lead)
- Ancoragem de perda (mostrar custo de continuar igual)
- Ancoragem de valor antes de preço
- Paradoxo leve (verdade que gera reflexão)
- Redução de risco implícita

Psicologia:
- Pessoas decidem emocionalmente e justificam racionalmente.
- O cérebro evita risco.
- A decisão acontece antes do preço.

Framework Know Row:
- Know the Pain
- Know the Pattern
- Know the Promise
- Know the Price
- Know the Push (momento de fechar)

Se identificar momento de decisão, conduza para o fechamento com naturalidade e autoridade.

Regras:
- Resposta curta (máximo 6 linhas).
- Tom seguro, calmo e dominante.
- Nunca seja agressivo.
- Nunca pareça desesperado.
- Gere clareza, não pressão.
- Foco total em conversão.
        `
        },
        {
          role: 'user',
          content: `Mensagem do lead: "${leadMessage}" Responda estrategicamente visando conversão.`
        }
      ]
    })
  })

  {/* 
  
    OBJETIVO DO NOVO AGENTE

1 - Identificar o momento da conversa:
Descoberta
Diagnóstico
Objeção
Hesitação
Momento de fechamento

2 - Detectar:
Objeção de preço
Objeção de tempo
Objeção de confiança
Objeção emocional (medo)
Confusão mental

3 - Aplicar:
SPIN (quando precisa aprofundar)
Implicação (tornar dor maior que preço)
Ancoragem (valor ou perda)
Espelho emocional
Paradoxo (verdade desconfortável)
Push estratégico (Know the Push)

4 - Responder curto, claro e persuasivo.

  */}

  if (!response.ok) {
    const err = await response.text()
    console.error('[DeepSeek ERROR]', err)
    throw new Error('DEEPSEEK_ERROR')
  }

  const data = await response.json()
  return data.choices?.[0]?.message?.content ?? ''
}

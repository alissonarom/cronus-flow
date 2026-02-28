import { FastifyInstance } from 'fastify'

export async function privacyRoutes(app: FastifyInstance) {
app.get('/privacy', async (req, reply) => {
  reply.type('text/html').send(`
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Política de Privacidade | Cronus Flow</title>
  <style>
    :root {
      --primary: #111827;
      --accent: #2563eb;
      --bg: #f9fafb;
      --text: #1f2937;
      --muted: #6b7280;
      --card: #ffffff;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    body {
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    header {
      background: var(--primary);
      color: white;
      padding: 60px 20px;
      text-align: center;
    }

    header h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }

    header p {
      color: #d1d5db;
      font-size: 0.95rem;
    }

    .container {
      max-width: 900px;
      margin: -40px auto 60px auto;
      padding: 0 20px;
    }

    .card {
      background: var(--card);
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    }

    h2 {
      margin-top: 40px;
      margin-bottom: 15px;
      font-size: 1.5rem;
      color: var(--primary);
    }

    p {
      margin-bottom: 15px;
    }

    ul {
      margin-left: 20px;
      margin-bottom: 20px;
    }

    li {
      margin-bottom: 8px;
    }

    footer {
      text-align: center;
      padding: 30px;
      font-size: 0.85rem;
      color: var(--muted);
    }

    a {
      color: var(--accent);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    @media (max-width: 600px) {
      header h1 {
        font-size: 1.8rem;
      }

      .card {
        padding: 25px;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>Política de Privacidade</h1>
    <p>Cronus Flow • Última atualização: 02 de fevereiro de 2026</p>
  </header>

  <div class="container">
    <div class="card">

      <p>A Cronus Flow valoriza a privacidade e a proteção de dados pessoais de seus usuários. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as informações fornecidas ao utilizar nossa plataforma.</p>

      <h2>1. Dados Coletados</h2>

      <h3>1.1 Dados de Cadastro</h3>
      <ul>
        <li>Endereço de e-mail</li>
        <li>Informações relacionadas ao plano contratado</li>
        <li>Dados de uso da plataforma</li>
      </ul>

      <h3>1.2 Dados de Autenticação</h3>
      <ul>
        <li>Senha protegida por criptografia (hash)</li>
        <li>Token de autenticação (JWT)</li>
      </ul>

      <h3>1.3 Dados Enviados para Processamento</h3>
      <ul>
        <li>Mensagens enviadas para análise</li>
        <li>Informações inseridas voluntariamente pelo usuário</li>
      </ul>

      <h3>1.4 Dados Técnicos</h3>
      <ul>
        <li>Endereço IP</li>
        <li>Logs de acesso</li>
        <li>Métricas de uso</li>
      </ul>

      <h2>2. Finalidade do Tratamento</h2>
      <p>Os dados coletados são utilizados para:</p>
      <ul>
        <li>Autenticação e controle de acesso</li>
        <li>Processamento das análises solicitadas</li>
        <li>Controle de limites de uso</li>
        <li>Melhoria contínua da plataforma</li>
        <li>Garantia de segurança e prevenção a fraudes</li>
      </ul>

      <h2>3. Compartilhamento de Dados</h2>
      <p>A Cronus Flow pode utilizar serviços de terceiros para viabilizar suas operações, como:</p>
      <ul>
        <li>Serviços de hospedagem</li>
        <li>Provedores de banco de dados</li>
        <li>APIs de inteligência artificial</li>
        <li>Serviços de integração e mensageria</li>
      </ul>
      <p>Esses fornecedores possuem suas próprias políticas de privacidade.</p>

      <h2>4. Armazenamento e Segurança</h2>
      <p>Os dados são armazenados em ambientes seguros, com controle de acesso e criptografia adequada. Senhas não são armazenadas em formato legível, sendo protegidas por algoritmos criptográficos.</p>

      <h2>5. Base Legal</h2>
      <p>O tratamento de dados ocorre em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD) e se baseia:</p>
      <ul>
        <li>Na execução de contrato</li>
        <li>No consentimento do usuário</li>
        <li>No legítimo interesse</li>
        <li>No cumprimento de obrigações legais</li>
      </ul>

      <h2>6. Direitos do Titular</h2>
      <p>O usuário pode solicitar:</p>
      <ul>
        <li>Confirmação da existência de tratamento</li>
        <li>Acesso aos dados</li>
        <li>Correção de dados</li>
        <li>Exclusão de dados</li>
        <li>Revogação do consentimento</li>
      </ul>
      <p>Solicitações podem ser enviadas para: <a href="mailto:contato@cronusflow.com">contato@cronusflow.com</a></p>

      <h2>7. Retenção de Dados</h2>
      <p>Os dados serão mantidos pelo período necessário para prestação do serviço ou cumprimento de obrigações legais.</p>

      <h2>8. Alterações nesta Política</h2>
      <p>Esta Política pode ser atualizada periodicamente. Recomendamos a revisão regular deste documento.</p>

    </div>
  </div>

  <footer>
    © 2026 Cronus Flow. Todos os direitos reservados.
  </footer>

</body>
</html>
  `)
})
}
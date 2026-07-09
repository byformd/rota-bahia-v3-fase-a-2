import { createApp } from '@/app'
import { env } from '@/config/env'

const app = createApp()

app.listen(env.port, () => {
  console.log(`Rota Bahia API rodando em http://localhost:${env.port}`)
  console.log(`Painel admin em http://localhost:${env.port}/admin`)
})

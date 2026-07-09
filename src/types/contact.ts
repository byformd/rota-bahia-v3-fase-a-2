import { z } from 'zod'

export const contactSchema = z.object({
  nome: z.string().min(3, 'Informe seu nome completo'),
  email: z.string().email('Informe um e-mail válido'),
  telefone: z.string().min(10, 'Informe um telefone válido com DDD'),
  assunto: z.string().min(3, 'Informe o assunto'),
  mensagem: z.string().min(10, 'Escreva uma mensagem com pelo menos 10 caracteres'),
})

export type ContactFormValues = z.infer<typeof contactSchema>

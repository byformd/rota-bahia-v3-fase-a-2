import { z } from 'zod'

export const contactInputSchema = z.object({
  nome: z.string().min(3),
  email: z.string().email(),
  telefone: z.string().min(10),
  assunto: z.string().min(3),
  mensagem: z.string().min(10),
})

export type ContactInput = z.infer<typeof contactInputSchema>

export const contactStatusSchema = z.object({
  status: z.enum(['novo', 'respondido', 'arquivado']),
})

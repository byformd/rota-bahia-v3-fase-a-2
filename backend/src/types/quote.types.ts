import { z } from 'zod'

export const quoteInputSchema = z.object({
  nome: z.string().min(3),
  empresa: z.string().optional(),
  telefone: z.string().min(10),
  email: z.string().email(),
  tipoServico: z.enum([
    'CARGAS_FECHADAS',
    'CARGAS_FRACIONADAS',
    'LOGISTICA_INTEGRADA',
    'MUDANCAS',
    'PORTA_A_PORTA',
  ]),
  origem: z.string().min(2),
  destino: z.string().min(2),
  descricaoCarga: z.string().min(10),
})

export type QuoteInput = z.infer<typeof quoteInputSchema>

export const quoteStatusSchema = z.object({
  status: z.enum(['novo', 'em-contato', 'convertido', 'descartado']),
})

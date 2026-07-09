import { z } from 'zod'

export const quoteSchema = z.object({
  nome: z.string().min(3, 'Informe seu nome completo'),
  empresa: z.string().optional(),
  telefone: z
    .string()
    .min(10, 'Informe um telefone válido com DDD')
    .regex(/^[\d\s()+-]+$/, 'Use apenas números, espaços e símbolos de telefone'),
  email: z.string().email('Informe um e-mail válido'),
  tipoServico: z.enum([
    'cargas-fechadas',
    'cargas-fracionadas',
    'logistica-integrada',
    'mudancas',
    'porta-a-porta',
  ]),
  origem: z.string().min(2, 'Informe a cidade de origem'),
  destino: z.string().min(2, 'Informe a cidade de destino'),
  descricaoCarga: z.string().min(10, 'Descreva brevemente a carga (mínimo 10 caracteres)'),
})

export type QuoteFormValues = z.infer<typeof quoteSchema>

export const servicoLabels: Record<QuoteFormValues['tipoServico'], string> = {
  'cargas-fechadas': 'Cargas Fechadas',
  'cargas-fracionadas': 'Cargas Fracionadas',
  'logistica-integrada': 'Logística Integrada',
  mudancas: 'Mudanças',
  'porta-a-porta': 'Porta a Porta',
}

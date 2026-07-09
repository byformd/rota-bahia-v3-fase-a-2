import { z } from 'zod'

const statusEnum = z.enum([
  'AGUARDANDO_COLETA',
  'EM_TRANSITO',
  'EM_ROTA_DE_ENTREGA',
  'ENTREGUE',
  'OCORRENCIA',
])

export const createShipmentSchema = z.object({
  trackingCode: z.string().min(4),
  origem: z.string().min(2),
  destino: z.string().min(2),
  clienteNome: z.string().min(3),
})

export const trackingEventSchema = z.object({
  status: statusEnum,
  location: z.string().min(2),
  description: z.string().min(3),
})

export type CreateShipmentInput = z.infer<typeof createShipmentSchema>
export type TrackingEventInput = z.infer<typeof trackingEventSchema>

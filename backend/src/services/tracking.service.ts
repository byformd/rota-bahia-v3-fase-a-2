import { prisma } from '@/config/prisma'
import { ApiError } from '@/middleware/error.middleware'
import type { ShipmentStatus } from '@prisma/client'

export async function getShipmentByCode(trackingCode: string) {
  const shipment = await prisma.shipment.findUnique({
    where: { trackingCode },
    include: { events: { orderBy: { occurredAt: 'asc' } } },
  })

  if (!shipment) {
    throw new ApiError(404, 'Código de rastreio não encontrado.')
  }

  return shipment
}

export function listShipments() {
  return prisma.shipment.findMany({ orderBy: { createdAt: 'desc' } })
}

export function createShipment(data: {
  trackingCode: string
  origem: string
  destino: string
  clienteNome: string
}) {
  return prisma.shipment.create({ data })
}

export async function addTrackingEvent(
  shipmentId: string,
  event: { status: ShipmentStatus; location: string; description: string }
) {
  const [, updated] = await prisma.$transaction([
    prisma.trackingEvent.create({ data: { shipmentId, ...event } }),
    prisma.shipment.update({ where: { id: shipmentId }, data: { status: event.status } }),
  ])
  return updated
}

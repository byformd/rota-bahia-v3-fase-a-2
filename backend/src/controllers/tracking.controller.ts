import type { Request, Response } from 'express'
import {
  getShipmentByCode,
  listShipments,
  createShipment,
  addTrackingEvent,
} from '@/services/tracking.service'
import type { CreateShipmentInput, TrackingEventInput } from '@/types/tracking.types'

export async function getShipmentHandler(req: Request, res: Response) {
  const code = req.params.code as string
  const shipment = await getShipmentByCode(code)
  res.json(shipment)
}

export async function listShipmentsHandler(_req: Request, res: Response) {
  const shipments = await listShipments()
  res.json(shipments)
}

export async function createShipmentHandler(req: Request, res: Response) {
  const shipment = await createShipment(req.body as CreateShipmentInput)
  res.status(201).json(shipment)
}

export async function addTrackingEventHandler(req: Request, res: Response) {
  const id = req.params.id as string
  const updated = await addTrackingEvent(id, req.body as TrackingEventInput)
  res.json(updated)
}

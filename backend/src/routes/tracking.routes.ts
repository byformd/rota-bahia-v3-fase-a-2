import { Router } from 'express'
import {
  getShipmentHandler,
  listShipmentsHandler,
  createShipmentHandler,
  addTrackingEventHandler,
} from '@/controllers/tracking.controller'
import { validateBody } from '@/middleware/validate.middleware'
import { requireAdminAuth } from '@/middleware/auth.middleware'
import { createShipmentSchema, trackingEventSchema } from '@/types/tracking.types'

export const trackingRouter = Router()

// Público — usado pela página de Rastreamento do site
trackingRouter.get('/:code', getShipmentHandler)

// Admin
trackingRouter.get('/', requireAdminAuth, listShipmentsHandler)
trackingRouter.post('/', requireAdminAuth, validateBody(createShipmentSchema), createShipmentHandler)
trackingRouter.post('/:id/events', requireAdminAuth, validateBody(trackingEventSchema), addTrackingEventHandler)

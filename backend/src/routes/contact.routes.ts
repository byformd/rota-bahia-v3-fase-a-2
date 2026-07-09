import { Router } from 'express'
import {
  createContactHandler,
  listContactHandler,
  updateContactStatusHandler,
} from '@/controllers/contact.controller'
import { validateBody } from '@/middleware/validate.middleware'
import { requireAdminAuth } from '@/middleware/auth.middleware'
import { contactInputSchema, contactStatusSchema } from '@/types/contact.types'

export const contactRouter = Router()

contactRouter.post('/', validateBody(contactInputSchema), createContactHandler)

contactRouter.get('/', requireAdminAuth, listContactHandler)
contactRouter.patch('/:id/status', requireAdminAuth, validateBody(contactStatusSchema), updateContactStatusHandler)

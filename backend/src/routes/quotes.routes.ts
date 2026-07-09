import { Router } from 'express'
import {
  createQuoteHandler,
  listQuotesHandler,
  updateQuoteStatusHandler,
} from '@/controllers/quotes.controller'
import { validateBody } from '@/middleware/validate.middleware'
import { requireAdminAuth } from '@/middleware/auth.middleware'
import { quoteInputSchema, quoteStatusSchema } from '@/types/quote.types'

export const quotesRouter = Router()

// Público — usado pelo formulário de Cotação do site
quotesRouter.post('/', validateBody(quoteInputSchema), createQuoteHandler)

// Admin — painel
quotesRouter.get('/', requireAdminAuth, listQuotesHandler)
quotesRouter.patch('/:id/status', requireAdminAuth, validateBody(quoteStatusSchema), updateQuoteStatusHandler)

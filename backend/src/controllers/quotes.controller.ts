import type { Request, Response } from 'express'
import { createQuote, listQuotes, updateQuoteStatus } from '@/services/quotes.service'
import type { QuoteInput } from '@/types/quote.types'

export async function createQuoteHandler(req: Request, res: Response) {
  const quote = await createQuote(req.body as QuoteInput)
  res.status(201).json(quote)
}

export async function listQuotesHandler(_req: Request, res: Response) {
  const quotes = await listQuotes()
  res.json(quotes)
}

export async function updateQuoteStatusHandler(req: Request, res: Response) {
  const id = req.params.id as string
  const updated = await updateQuoteStatus(id, req.body.status)
  res.json(updated)
}

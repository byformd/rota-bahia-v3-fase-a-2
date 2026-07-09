import { prisma } from '@/config/prisma'
import type { QuoteInput } from '@/types/quote.types'

export function createQuote(data: QuoteInput) {
  return prisma.quoteRequest.create({ data })
}

export function listQuotes() {
  return prisma.quoteRequest.findMany({ orderBy: { createdAt: 'desc' } })
}

export function updateQuoteStatus(id: string, status: string) {
  return prisma.quoteRequest.update({ where: { id }, data: { status } })
}

import { prisma } from '@/config/prisma'
import type { ContactInput } from '@/types/contact.types'

export function createContactMessage(data: ContactInput) {
  return prisma.contactMessage.create({ data })
}

export function listContactMessages() {
  return prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } })
}

export function updateContactStatus(id: string, status: string) {
  return prisma.contactMessage.update({ where: { id }, data: { status } })
}

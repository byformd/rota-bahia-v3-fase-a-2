import type { Request, Response } from 'express'
import { createContactMessage, listContactMessages, updateContactStatus } from '@/services/contact.service'
import type { ContactInput } from '@/types/contact.types'

export async function createContactHandler(req: Request, res: Response) {
  const message = await createContactMessage(req.body as ContactInput)
  res.status(201).json(message)
}

export async function listContactHandler(_req: Request, res: Response) {
  const messages = await listContactMessages()
  res.json(messages)
}

export async function updateContactStatusHandler(req: Request, res: Response) {
  const id = req.params.id as string
  const updated = await updateContactStatus(id, req.body.status)
  res.json(updated)
}

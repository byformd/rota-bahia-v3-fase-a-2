import type { Request, Response } from 'express'
import { loginAdmin } from '@/services/auth.service'
import type { LoginInput } from '@/types/auth.types'

export async function login(req: Request, res: Response) {
  const { email, password } = req.body as LoginInput
  const result = await loginAdmin(email, password)
  res.json(result)
}

import type { Request, Response, NextFunction } from 'express'
import { verifyAdminToken, type AdminTokenPayload } from '@/utils/jwt'

declare global {
  namespace Express {
    interface Request {
      admin?: AdminTokenPayload
    }
  }
}

export function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Token de autenticação ausente.' })
    return
  }

  const token = header.slice('Bearer '.length)
  try {
    req.admin = verifyAdminToken(token)
    next()
  } catch {
    res.status(401).json({ error: 'Token inválido ou expirado.' })
  }
}

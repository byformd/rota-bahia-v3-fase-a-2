import { Router } from 'express'
import { login } from '@/controllers/auth.controller'
import { validateBody } from '@/middleware/validate.middleware'
import { loginSchema } from '@/types/auth.types'

export const authRouter = Router()

authRouter.post('/login', validateBody(loginSchema), login)

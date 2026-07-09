import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import path from 'path'
import { env } from '@/config/env'
import { authRouter } from '@/routes/auth.routes'
import { quotesRouter } from '@/routes/quotes.routes'
import { contactRouter } from '@/routes/contact.routes'
import { trackingRouter } from '@/routes/tracking.routes'
import { notFoundHandler, errorHandler } from '@/middleware/error.middleware'

export function createApp() {
  const app = express()

  app.use(helmet())
  app.use(cors({ origin: env.corsOrigin }))
  app.use(express.json())
  app.use(morgan(env.isProduction ? 'combined' : 'dev'))

  // Limite de requisições nos endpoints públicos que recebem formulários,
  // para mitigar spam/abuso.
  const formLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 30 })
  app.use('/api/quotes', formLimiter)
  app.use('/api/contact', formLimiter)

  app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

  app.use('/api/auth', authRouter)
  app.use('/api/quotes', quotesRouter)
  app.use('/api/contact', contactRouter)
  app.use('/api/tracking', trackingRouter)

  // Painel administrativo básico (HTML estático + JS puro, ver public/admin)
  app.use('/admin', express.static(path.join(__dirname, '..', 'public', 'admin')))

  app.use('/api', notFoundHandler)
  app.use(errorHandler)

  return app
}

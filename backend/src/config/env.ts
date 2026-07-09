import 'dotenv/config'

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback
  if (!value) {
    throw new Error(`Variável de ambiente ausente: ${name}. Confira o arquivo .env (veja .env.example).`)
  }
  return value
}

export const env = {
  port: Number(process.env.PORT ?? 4000),
  corsOrigin: required('CORS_ORIGIN', 'http://localhost:5173'),
  jwtSecret: required('JWT_SECRET'),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '8h',
  isProduction: process.env.NODE_ENV === 'production',
}

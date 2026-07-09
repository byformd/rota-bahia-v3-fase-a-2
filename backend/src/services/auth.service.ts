import bcrypt from 'bcryptjs'
import { prisma } from '@/config/prisma'
import { signAdminToken } from '@/utils/jwt'
import { ApiError } from '@/middleware/error.middleware'

export async function loginAdmin(email: string, password: string) {
  const admin = await prisma.admin.findUnique({ where: { email } })
  if (!admin) {
    throw new ApiError(401, 'E-mail ou senha inválidos.')
  }

  const valid = await bcrypt.compare(password, admin.passwordHash)
  if (!valid) {
    throw new ApiError(401, 'E-mail ou senha inválidos.')
  }

  const token = signAdminToken({ sub: admin.id, email: admin.email, name: admin.name })
  return { token, admin: { id: admin.id, name: admin.name, email: admin.email } }
}

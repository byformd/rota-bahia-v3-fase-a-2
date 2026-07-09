import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import 'dotenv/config'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD
  const name = process.env.ADMIN_NAME ?? 'Administrador'

  if (!email || !password) {
    throw new Error('Defina ADMIN_EMAIL e ADMIN_PASSWORD no .env antes de rodar o seed.')
  }

  const existing = await prisma.admin.findUnique({ where: { email } })
  if (existing) {
    console.log(`Admin já existe: ${email}`)
    return
  }

  const passwordHash = await bcrypt.hash(password, 10)
  await prisma.admin.create({ data: { name, email, passwordHash } })
  console.log(`Admin criado com sucesso: ${email}`)
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())

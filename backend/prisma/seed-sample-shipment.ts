/**
 * Cria uma carga de exemplo com histórico de rastreamento, só para
 * facilitar o teste local da página /rastreamento.
 *
 * Uso: npx tsx prisma/seed-sample-shipment.ts
 * (rode depois do `npm run prisma:migrate`)
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const trackingCode = 'RB2026001234'

  const existing = await prisma.shipment.findUnique({ where: { trackingCode } })
  if (existing) {
    console.log(`Carga de teste já existe: ${trackingCode}`)
    return
  }

  const shipment = await prisma.shipment.create({
    data: {
      trackingCode,
      origem: 'Simões Filho, BA',
      destino: 'São Paulo, SP',
      clienteNome: 'Cliente de Teste',
      status: 'EM_TRANSITO',
    },
  })

  await prisma.trackingEvent.createMany({
    data: [
      {
        shipmentId: shipment.id,
        status: 'AGUARDANDO_COLETA',
        location: 'Simões Filho, BA',
        description: 'Carga recebida no pátio de origem.',
        occurredAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
      },
      {
        shipmentId: shipment.id,
        status: 'EM_TRANSITO',
        location: 'Vitória da Conquista, BA',
        description: 'Carga em trânsito rumo a São Paulo.',
        occurredAt: new Date(Date.now() - 1000 * 60 * 60 * 20),
      },
      {
        shipmentId: shipment.id,
        status: 'EM_TRANSITO',
        location: 'Belo Horizonte, MG',
        description: 'Parada programada para troca de motorista.',
        occurredAt: new Date(Date.now() - 1000 * 60 * 60 * 6),
      },
    ],
  })

  console.log(`Carga de teste criada! Use o código: ${trackingCode}`)
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())

import { PrismaClient } from '@prisma/client'
const prisma: PrismaClient = new PrismaClient()

async function main() {
  await prisma.$connect()
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect
  })

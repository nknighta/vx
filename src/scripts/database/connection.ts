import { PrismaClient } from '@prisma/client'

export default async function db() {
  const prisma = new PrismaClient()
  try {
    return {
      data: await prisma.user.findMany(),
    }
  } catch (error) {
    return 'notFound'
  }
}

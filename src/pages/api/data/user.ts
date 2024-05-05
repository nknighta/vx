import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const prisma = new PrismaClient()
  const users = await prisma.account.findMany()
  const project = await prisma.project.findMany()
  // map users to get only id, name, email, image
  const data = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
    }
  })
  // map project to get only id, name, description
  const pjdata = project.map((project) => {
    return {
      id: project.id,
      name: project.name,
      description: project.description,
    }
  })
  res.status(200).json({ userdata: data, projectdata: pjdata })
}

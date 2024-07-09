import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email } = req.body
        const user = await prisma.account.create({
            data: {
                name,
                email,
            },
        })
        res.json(user)
    } else if (req.method === 'GET') {
        const users = await prisma.account.findMany()
        res.json(users)
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }

}
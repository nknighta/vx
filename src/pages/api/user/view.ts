import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { name, email } = req.body;
    const user = await prisma.account.findMany(
        {
            where: {
                accountname: name,
                email: email,
            }
        }
    );
    try {
        res.json({ name, email, user});
        prisma.$disconnect();
    } catch (error) {
        res.status(400).json({ error: 'invaild syntax' });
        prisma.$disconnect();
    }
}
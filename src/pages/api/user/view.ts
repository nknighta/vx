import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { name, email } = req.body;
    const user = await prisma.user.findMany(
        {
            where: {
                name: name,
                email: email,
            }
        }
    );
    const data = prisma.user.findMany();
    console.log(data);
    try {
        res.json({ name, email,  user, data });
    } catch (error) {
        res.status(400).json({ error: 'invaild syntax' });
    }
}
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
export default async function AppList(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const appList = await prisma.apps.findUnique({
        where: {
            appid: req.query.id as string
        }
    })
    .then((data) => {
        return data;
    });
    res.json(appList);
}
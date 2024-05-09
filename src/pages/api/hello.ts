// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const prisma = new PrismaClient();
  const users = await prisma.account.findMany();
  const email = users.map((user) => user.email);
  const output = email.join(", ");
  return res.status(200).json({ name: output });
}

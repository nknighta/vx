import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'scripts/database/connection'
import { exchangeUnixDate } from 'scripts/exdate'

/**
 * @returns {Promise<void>}
 * @returns {
 * user: {
 *  id: string,
 * name: string,
 * image: string,
 * email: string,
 * provider: string,
 * createdAt: string (formatted date)
 * }}
 * path - /api/data/user/
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query
  const user = await prisma.account.findUnique({
    where: {
      id: id as string,
    },
  })

  const userProjects = await prisma.project.findMany({
    where: {
      accountid: id as string
    }
  })
  const unixTime = new Date(user?.createdAt as Date).getTime();
  const date = new Date(unixTime ); 
  const time = new Date(unixTime ); // Multiply by 1000 to convert from seconds to milliseconds
  const formattedDate = `${date.toLocaleString()}`; // Convert the date to a string in ISO 8601 format

  res.status(200).json(
    {
      user: {
        id: user?.id,
        name: user?.name,
        image: user?.image,
        email: user?.email,
        provider: user?.authprovider,
        createdAt: exchangeUnixDate({ base: time, formattedDate: formattedDate }),
      },
      project: {
        userProjects: userProjects.map((project) => {
          return {
            id: project.id,
            name: project.name,
            description: project.description,
            createdAt: exchangeUnixDate({ base: project.createdAt, formattedDate: formattedDate }),
          }
        })
      }
    })
}

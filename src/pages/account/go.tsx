import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PrismaClient } from '@prisma/client'
import e from 'express'

interface SessionGo {
  email: string
}

export default function SessionGo({ email }: SessionGo) {
  const prisma = new PrismaClient()
  const userDataOnDB = prisma.account.findUnique({
    where: {
      email: email,
    },
  })
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session) {
      email = session.user?.email as string
    }
  }, [session])
}

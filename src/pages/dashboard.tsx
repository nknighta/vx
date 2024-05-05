import HMeta from 'components/headmeta'
import Layout from 'layout/main'
import React, { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'
import { useRouter } from 'next/router'

export default function Dash(account) {
  const { data: session } = useSession({ required: true })
  const router = useRouter()
  // redirect to signin page if no session
  useEffect(() => {
    if (!session) {
      router.push('/account/signin')
    }
  }, [session])
  if (session) {
    return (
      <Layout>
        <>
          <HMeta
            pageTitle="Dashboard"
            pageDescription="VARIUS development team"
            pagePath="/dashboard"
            pageImg={'/api/og?title=VX-WEB3'}
          />
          <div>
            <h1>Dashboard</h1>
            <p>name: {session.user?.name} </p>
            <Image
              src={session.user?.image as string}
              alt={session.user?.name as string}
              width={100}
              height={100}
              style={{ borderRadius: '50%' }}
            />
            <p>email: {session.user?.email}</p>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        </>
      </Layout>
    )
  }
}

export async function getServerSideProps() {
  // get all users from database
  const prisma = new PrismaClient()
  const users = await prisma.account.findMany()
  // map users to get only id, name, email, image
  const data = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
    }
  })
  return {
    props: {
      account: data,
    },
  }
}

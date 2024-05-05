import { useSession, signIn, getProviders } from 'next-auth/react'
import { useRouter } from 'next/router'
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { useEffect } from 'react'
import HMeta from 'components/headmeta'
import { PrismaClient } from '@prisma/client'

export default function Component({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession()
  const router = useRouter()
  const prisma = new PrismaClient()
  useEffect(() => {
    if (session) {
      router.push('/dashboard')
    }
    //else if {}
  }, [session])
  return (
    <>
      <HMeta
        pageTitle="Sign In"
        pageDescription="VARIUS development team"
        pagePath="/account/signin"
        pageImg={'/api/og?title=Sign+In'}
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            style={{
              backgroundColor: '#000',
              color: 'white',
              padding: '0.5rem',
              margin: '0.5rem',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
            onClick={() => signIn(provider.id)}
          >
            {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}

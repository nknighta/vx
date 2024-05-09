import { useSession, signIn, getProviders } from 'next-auth/react'
import { useRouter } from 'next/router'
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import HMeta from '../../components/headmeta';
import { PrismaClient } from '@prisma/client'
import Layout from 'layout/main';

export default function Component({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession()
  const router = useRouter()
  const prisma = new PrismaClient()
  if (session) {
    router.push('/dashboard')
  }
  return (
    <Layout>
      <HMeta
        pageTitle="Sign In"
        pageDescription="VARIUS development team"
        pagePath="/account/signin"
        pageImg={'/api/og?title=Sign+In'}
      />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}>
        <h1>Sign In</h1>
        with
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              style={{
                backgroundColor: '#333',
                color: 'white',
                padding: '0.7rem 2.1rem',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
              onClick={() => signIn(provider.id, { callbackUrl: "/dashboard" })}
            >
              {provider.name}
            </button>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}

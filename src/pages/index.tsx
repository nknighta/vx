import { ComponentType, useEffect } from 'react'
import Layout from 'layout/main'
import HMeta from 'components/headmeta'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Home() {
  const { data: session } = useSession()
  const LazyComponent: ComponentType<{}> = dynamic(
    () => import('../components/threebox'),
    {
      loading: () => <Loading />,
      ssr: false,
    },
  )
  const router = useRouter()
  useEffect(() => {
    if (session) {
      router.push('/?auth=true')
    } else {
      router.push('/')
    }
  }, [session])
  return (
    <Layout>
      <HMeta
        pageTitle="Home"
        pageDescription="VARIUS development team"
        pagePath="/"
        pageImg={'/api/og?title=VX-WEB3'}
      />
      <LazyComponent />
    </Layout>
  )
}

function Loading(): JSX.Element {
  return (
    <div
      style={{
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {'>_ : '}Loading...
    </div>
  )
}

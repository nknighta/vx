import { ComponentType } from 'react'
import Layout from '../layout/main'
import HMeta from '../components/headmeta'
import dynamic from 'next/dynamic'
import CookieAcceptPopUp from '../components/assept-cookie'

export default function Home() {
  const LazyComponent: ComponentType<{}> = dynamic(
    () => import('../components/threebox'),
    {
      loading: () => <Loading />,
      ssr: false,
    },
  )
  return (
    <Layout>
      <HMeta
        pageTitle="Home"
        pageDescription="VARIUS development team"
        pagePath="/"
        pageImg={'/api/og?title=Welcome&description=VARIUS%20development%20team'}
      />
      <LazyComponent />
      <div>
        welcome to web3 development
      </div>
      <CookieAcceptPopUp />
      <div>
        next step <a href="/x9">sign up</a>
      </div>
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


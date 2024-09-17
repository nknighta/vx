import { ComponentType } from 'react';
import Layout from '../layout/main';
import HMeta from '../components/headmeta';
import dynamic from 'next/dynamic';
import CookieAcceptPopUp from '../components/assept-cookie';
import { Dots } from 'components/svgloader'

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
      <div className='pt-10'>
        welcome to web3 development
      </div>
      <div className='pt-2'>
        this is VARIUS development team
      </div>
      <CookieAcceptPopUp />
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


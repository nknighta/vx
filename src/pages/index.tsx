import Layout from '../layout/main';
import HMeta from '../components/headmeta';
import dynamic from 'next/dynamic';
import Link from 'next/link';

export default function Home() {
  const LazyComponent = dynamic(() => import('../components/threebox'), {
    loading: () => <Loading />,
    ssr: false,
  });
  return (
    <Layout>
      <HMeta
        pageTitle="Home"
        pageDescription="VARIUS development team"
        pagePath="/"
        pageImg={'/api/og?title=Welcome&description=VARIUS%20development%20team'}
      />
      <div className='py-5 pl-5 text-purple-300 text-4xl'>
        <Link href='/'>
          VARIUS.web
        </Link>
      </div>
      <HRDash />
      <div className='py-16 pl-5 text-2xl'>
        Web3 development
      </div>
      <HRDash />
      <div className='py-16 pl-5 text-2xl'>
        Virtual Currency Networks
      </div>
      <HRDash />
      <div className='py-16 pl-5 text-2xl'>
        Smart Contracts
      </div>
      <HRDash />
      <div>
        <LazyComponent />
      </div>
      <ul className={`w-100 py-4`}>
        <li className={`pl-5 py-1`}>
          <Link href='/works'>
            Works
          </Link>
        </li>
        <li className={`pl-5 py-1`}>
          <Link href='/about'>
            About
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

function HRDash() {
  return (
    <hr className='border-2 border-sky-500 border-dashed border-1 ml-4 w-3/5' />
  )
}

function Loading(): JSX.Element {
  return (
    <div
      style={{
        height: '100%',
      }}
    >
    </div>
  )
}


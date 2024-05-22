import { ComponentType, useEffect, useState, memo } from 'react'
import Layout from 'layout/main'
import HMeta from 'components/headmeta'
import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import popstyle from '../styles/popup.module.sass'
import { getWindowHight } from 'scripts/getWidth'

export default function Home() {
  const { data: session } = useSession();
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
  //appEnv
  return (
    <Layout>
      <HMeta
        pageTitle="Home"
        pageDescription="VARIUS development team"
        pagePath="/"
        pageImg={'/api/og?title=VX-WEB3'}
      />
      <LazyComponent />
      <MemoCookieAcceptPopUp />
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
const MemoCookieAcceptPopUp = memo(CookieAcceptPopUp);

function CookieAcceptPopUp() {
  const [isPopup, setIsPopUp] = useState(false);
  const height = getWindowHight();
  const router = useRouter();
  let auth = router.query.auth;
  useEffect(() => {
    if (auth) {
      setIsPopUp(false);
    } else {
      setIsPopUp(true);
    }
  }, [auth]);
  return (
    <>
      <div className={popstyle.baseddisplay}>
        {isPopup ? (
          <div  className={popstyle.main} 
          style={{
            top: `${height - height * 0.27}px`,
            left: `10px`,
          }}>
            this page uses cookies to improve your experience, by continuing to use this page you accept the use of cookies
          </div>
        ) : ""}
      </div>
    </>
  )
}

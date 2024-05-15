import HMeta from '../../components/headmeta'
import Layout from '../../layout/main'
import React, { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import dashstyle from '../../styles/dashboard.module.sass'
import { getWindowWidth } from 'scripts/getWidth'
// dash_container

export default function Dash() {
  const { data: session } = useSession({ required: true });
  const router = useRouter();
  const width = getWindowWidth();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (width < 970) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width])

  const [username, setName] = useState<string>("")
  const [useremail, setEmail] = useState<string>("")
  const [userid, setUerId] = useState<string>("")

  useEffect(() => {

    const fetchdata = async () => {
      const data = await fetch(`http://localhost:3000/api/data/user?id=clvqnrc1o0000ylbl62p3t3od`);
      return data.json()
    }
    fetchdata().then((data) => {
      setName(data.user.name)
      setEmail(data.user.email)
      setUerId(data.user.id)
    })
  }, [])

  // redirect to signin page if no session
  useEffect(() => {
    if (!session) {
      router.push('/account/signin')
    }
  }, [session])
  if (session) {
    return (
      <Layout>
        <div>
          <HMeta
            pageTitle="Dashboard"
            pageDescription="VARIUS development team"
            pagePath="/dashboard"
            pageImg={'/api/og?title=VX-WEB3'}
          />
          <div className={isMobile ? dashstyle.dash_container_mobile : dashstyle.dash_container}>
            <h1 className={isMobile ? dashstyle.infoview_left_title : dashstyle.dash_container_title_mobile}>Dashboard</h1>
            <div>
              <Image
                src={session.user?.image as string}
                alt={session.user?.name as string}
                width={100}
                height={100}
                style={{ borderRadius: '50%' }}
              />
            </div>
            <div>
              <DisplayInfo context="usernid" value={username} style={dashstyle.dash_container_text} />
              <DisplayInfo context="useremail" value={useremail} style={dashstyle.dash_container_text} />
              <DisplayInfo context="username" value={username} style={dashstyle.dash_container_text} />
            </div>
            <div>
              aaa
            </div>
            <div>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const DisplayInfo = (props: { context: string, value: string, style: any }) => {
  return (
    <div className={props.style}>
      <h2>{props.context}</h2>
      <p>
        {props.value == "" ? "loding..." : props.value}
      </p>
    </div>
  )
}

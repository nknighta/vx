import HMeta from '../../components/headmeta'
import Layout from '../../layout/main'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import dashstyle from '../../styles/dashboard.module.sass'
import { getWindowWidth } from 'scripts/getWidth'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
// dash_container

type Props = {
  queryParam: string
}

export default function Dash({queryParam}: Props) {
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
  const [userimage, setImage] = useState<string>("")
  const user = router.query.user
  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch(`http://varius.technology:3003/auth/github/?user=${user}`);
      return data.json()
    }
    fetchdata()
      .then((data) => {
        setName(data.name)
        if (data.email == null) {
          data.email = "<email is not set.>"
        }
        setEmail(data.email)
        setUerId(data.id)
        setImage(data.image)
      })
  }, [])
  //console.log(queryParam.match(/user=([^&]*)/))
  // redirect to signin page if no session
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
            <Image src={userimage} alt='avator' width={100} height={100} style={{
              borderRadius: "50%",
              border: "1px solid #000",
              margin: "0 auto",
            }} />
          </div>
          <div>
            <DisplayInfo context="usernid" value={username} style={dashstyle.dash_container_text} />
            <DisplayInfo context="useremail" value={useremail} style={dashstyle.dash_container_text} />
            <DisplayInfo context="username" value={userid} style={dashstyle.dash_container_text} />
          </div>
        </div>
      </div>
      <p>{user}</p>
    </Layout>
  )
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

export const getServerSideProps = (
  context: GetServerSidePropsContext
): GetServerSidePropsResult<Props> => {
  const queryParam = context.query.queryParam?.toString() || ' '
  return {
    props: {
      queryParam: queryParam
    }
  }
}

import Layout from '../../layout/main';
import HMeta from '../../components/headmeta';
import Link from 'next/link';

export default function Signin() {
  return (
    <>
      <Layout>
        <HMeta
          pageTitle="Signin"
          pageDescription="VARIUS development team"
          pagePath="/account/signin"
          pageImg={'/api/og?title=VX-WEB3'}
        />
        <div>
          <h1>Signin</h1>
          <Link href={`https://github.com/login/oauth/authorize?scope=user,repo&client_id=Iv1.f70fe782834c0370&redirect_uri=http://localhost:3000/auth/callback/`}>github</Link> 
        </div>
      </Layout>
    </>
  )
}
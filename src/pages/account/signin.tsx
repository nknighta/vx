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
<<<<<<< HEAD
          <Link href={`https://github.com/login/oauth/authorize?scope=user,repo&client_id=Iv1.f70fe782834c0370&redirect_uri=http://localhost:3000/auth/callback/`}>github</Link> 
=======
          <a href='https://github.com/login/oauth/authorize?scope=user,repo&client_id=Iv1.f70fe782834c0370&redirect_uri=http://varius.technology:3003/auth/callback'>github</a> 
>>>>>>> 1de88a642b1f67ec54bef10e077551533c22de4a
        </div>
      </Layout>
    </>
  )
}

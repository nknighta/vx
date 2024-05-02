import { useSession, signIn, getProviders, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next";
import { useRouter } from "next/router"
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { useEffect } from "react";
import HMeta from "components/headmeta";

export default function Component({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/dashboard")
    }
  }, [session])
  return (
    <>
      <HMeta pageTitle='Sign In' pageDescription='VARIUS development team' pagePath='/account/signin' pageImg={'/api/og?title=Sign+In'} />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            style={{
              backgroundColor: '#000',
              color: 'white',
              padding: '0.5rem',
              margin: '0.5rem',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
            onClick={() => signIn(provider.id)}>
            {provider.name}
          </button>
        </div>
      ))}
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <p>{provider.name}</p>
          <p>{provider.id}</p>
          <p>{provider.type}</p>
          <p>{provider.signinUrl}</p>
          <p>{provider.callbackUrl}</p>
        </div>
      ))}
    </>
  )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
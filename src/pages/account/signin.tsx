import { useSession, signIn, getProviders, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next";
import { useRouter } from "next/router"
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { useEffect } from "react";

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
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <div onClick={() => signIn(provider.id)}>
            {provider.name}
          </div>
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
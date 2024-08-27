import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "layout/main"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
export default function Component() {
    const { data: session } = useSession()
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "https://varius.technology"; 
    console.log("callbackUrl", callbackUrl);
    if (session) {
        router.push("/dashboard");
        return (
            <></>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn("github", {
            })}>Sign in</button>
        </>
    )
}

Component.getLayout = function getLayout(page: any) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
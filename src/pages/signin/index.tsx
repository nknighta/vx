import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "layout/main"
import { useSearchParams } from "next/navigation";

export default function Component() {
    const { data: session } = useSession()
    const user = session?.user?.name
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "https://varius.technology"; 
    console.log("callbackUrl", callbackUrl);
    if (session) {
        return (
            <>
                name: {user} <br />
                <pre>
                    <code>
                        {JSON.stringify(session, null, 2)}
                    </code>
                </pre>
                <button onClick={() => signOut()}>Sign out</button>
            </>
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
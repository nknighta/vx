import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "layout/main"

export default function Component() {
    const { data: session } = useSession()
    const user = session?.user?.name
    console.log('email:', session?.id)
    if (session) {
        return (
            <>
                name: {user} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
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
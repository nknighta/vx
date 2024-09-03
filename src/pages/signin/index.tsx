import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "layout/main"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
export default function Component() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "https://varius.technology"; 
    console.log("callbackUrl", callbackUrl);
    return (
        <Layout>
            Not signed in <br />
            <button onClick={() => 
                router.push("/x9")
            }>Sign in With<p className={"bg-black"}>github</p></button>
        </Layout>
    )
}

Component.getLayout = function getLayout(page: any) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
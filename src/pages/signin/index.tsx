import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "layout/main"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import HMeta from "components/headmeta";
export default function Component() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "https://varius.technology";
    console.log("callbackUrl", callbackUrl);
    return (
        <Layout>
            <HMeta pageTitle="Sign In"/> 
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                    fontSize: "1.3rem",
                    padding: "2rem"
                }}>
                    dev account <br />
                    Sign in With
                </div>
                <div 
                    className="flex flex-row justify-center items-center h-30 w-full">
                    <button
                        className={"text-2xl bg-purple-600 px-4 h-12 rounded-3xl flex justify-center items-center"}
                        onClick={() =>
                            router.push("/x9")
                        }>
                        GitHub
                        <span style={{ width: "1rem" }} />
                        <img height="32" width="32" src="https://cdn.simpleicons.org/github/white" />
                    </button>
                </div>
            </div>
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
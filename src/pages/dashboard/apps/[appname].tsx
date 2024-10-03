import Layout from "layout/main"
import Link from "next/link";
import { useRouter } from "next/router"

export default function AppName() {
    const router = useRouter();
    const { appname } = router.query;
    return (
        <Layout>
            <h1>AppName</h1>
            <p>{appname}</p>
            <Link href={`https://x.com/compose/post?text=https://varius.technology/userapp/${appname}&hashtags=vx_web3,${appname}OnVX`}>
                <p>Share Your App (X)</p>
            </Link>
        </Layout>
    )
}
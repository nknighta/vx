import HMeta from "components/headmeta";
import Layout from "layout/main";
import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react"
import Image from 'next/image';
import { useRouter } from "next/router";

export default function Dash() {
    const { data: session } = useSession();
    const router = useRouter();
    // redirect to signin page if no session
    useEffect(() => {
        if (!session) {
            router.push("/account/signin")
        }
    }, [session])
    if (session) {
        return (
            <Layout>
                <>
                    <HMeta
                        pageTitle='Dashboard'
                        pageDescription='VARIUS development team'
                        pagePath='/dashboard'
                        pageImg={'/api/og?title=VX-WEB3'}
                    />
                    <div>
                        <h1>Dashboard</h1>
                        <p>You are signed in as {session.user?.name} </p>
                        <Image src={session.user?.image as string} alt={session.user?.name as string} width={50} height={50} />
                        <button onClick={() => signOut()}>Sign out</button>
                    </div>
                </>
            </Layout>
        )
    }

}
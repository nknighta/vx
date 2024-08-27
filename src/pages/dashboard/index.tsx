import React from 'react';
import Layout from 'layout/main';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

// this is dashboad page
export default function Dash() {
    const { data: session } = useSession()
    const user = session?.user?.name
    if (session) {
        return (
            <Layout>
                <div>
                    name: {user} <br />
                    <Image src={session.user?.image as string} alt={user} width={100} height={100} />
                    <button
                        onClick={() => signOut()}
                        style={{
                            padding: "10px",
                            borderRadius: "50px",
                            border: "none",
                            cursor: "pointer",
                            backgroundColor: "#9120f090",
                            color: "white"
                        }}>
                        Sign out
                    </button>
                </div>
            </Layout>
        )
    }
    return (
        <Layout>

        </Layout>
    )
}

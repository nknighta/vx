import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import HMeta from "components/headmeta";

export default function ProtectedPage({ data }: { data: any[] }) {
    const router = useRouter();
    const { data: session } = useSession();
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        if (session) {
            setEmail(`${session?.user?.email}`);
        }
    }, [session]);

    useEffect(() => {
        if (!data) {
            router.push("/account/signup");
        } else {
            null;
        }
    }, [email]);

    return <div>
        <HMeta pageTitle="sign in..." />
        signed in as: {session?.user?.email}?
        <button onClick={() => router.push("/dashboard")}>sign in</button>
    </div>;
}

/**
 * 
 * @returns prisma.account.findUnique({
            where: { email },
        }).then((user) => {
            if (user) {
                router.push("/dashboard");
            } else {
                router.push("/account/signup");
            }
        });
 */
export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const users = await prisma.account.findUnique({
        where: { email: process.env.TEST_ACCOUNT },
    })
    return {
        props: {
            data: JSON.parse(JSON.stringify(users)),
        },
    };
}
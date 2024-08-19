import { GetServerSideProps } from 'next'
import { PrismaClient } from "@prisma/client"

export default function FirstUserAdd(props: any) {
    console.log(props.users)
    return (
        <div>
            <h1>First User Add</h1>
            <code>
                {JSON.stringify(props.users)}
            </code>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();
    return {
        props: {
            users: JSON.parse(JSON.stringify(users))
        },
    }
}
import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function (account) {
    const router = useRouter();
    const { id } = router.query;
    // get user id from query
    return (
        <div>
            <p>test</p>
            {account.account.map((user) => {
                return (
                    <div key={user.id}>
                        {
                            user.name == id ? (
                                <>
                                    <Image
                                        src={user.image}
                                        alt={user.name}
                                        width={100}
                                        height={100}
                                        style={{ borderRadius: '50%' }}
                                    />
                                    <p>{user.name}</p>
                                    <p>{user.email}</p>
                                </>
                            ) : (<>
                            </>)
                        }
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps() {
    // get all users from database
    const prisma = new PrismaClient();
    const users = await prisma.account.findMany();
    // map users to get only id, name, email, image
    const data = users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image
        }
    });
    return {
        props: {
            account: data
        }
    }
}
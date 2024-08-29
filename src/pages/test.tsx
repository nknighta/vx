import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export default function Test() {
    const [authMsg, setAuthMsg] = useState<string>();
    const { data: session } = useSession();
    useEffect(() => {
        const key = getCookie('cookie');
        console.log(key);
        setAuthMsg(key);
    }, []);
    return (
        <div>
            <h1>Test</h1>
            <p>{authMsg}</p>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)
    
    return {
      props: {
        session,
      },
    }
  }
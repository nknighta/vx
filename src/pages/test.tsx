import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

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
        </div>
    )
}
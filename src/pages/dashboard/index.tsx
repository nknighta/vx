import React, { useEffect, useState } from 'react';
import Layout from 'layout/main';
import HMeta from 'components/headmeta';
import { useRouter } from 'next/router';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import Image from 'next/image';

// this is dashboad page
interface DashClientProps {
    username: string;
    status: boolean;
    localCookie: string;
}

export default function Dash() {
    const router = useRouter();
    const [data, setData] = useState<DashClientProps>({
        username: '',
        status: false,
        localCookie: ''
    });
    const username = router.query.username;
    const x = getCookie('username');
    useEffect(() => {
        // load dara when settinged from cookie
        if (x !== undefined) {
            setCookie('login', 'settinged login');
            router.push('/dashboard');
            setData({ username: x as string, status: true, localCookie: x as string });
            
        }
        // load data when settinged from x9 authentification
        else if (username !== undefined || x !== undefined) {
            setCookie('login', 'x9 router passed');
            router.push('/dashboard');
            setData({ username: username as string, status: true, localCookie: username as string });
            
        } else {
            // failed to load data
            router.push('/signin');
            deleteCookie('login');
            deleteCookie('username');
        }
    }, [username])
    return (
        <Layout>
            <div className='text-black'>
                <HMeta pageTitle="Dashboard" pageDescription="check your profile" pagePath="/dashboard" />
                <input type="text"  className='bg-blue' disabled={!data.status}/>
                <h1 className='text-3xl'>Dashboard</h1>
                <p>username: {data.username}</p>
                <pre>
                    <code>
                        {JSON.stringify(data, null, 1)}
                    </code>
                </pre>
            </div>
        </Layout >
    )
}

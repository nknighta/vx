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
    }, [username])
    return (
        <Layout>
            <div>
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

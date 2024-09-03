import React, { useEffect, useState } from 'react';
import Layout from 'layout/main';
import HMeta from 'components/headmeta';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';

// this is dashboad page
export default function Dash() {
    const router = useRouter();
    const [user, setUser] = useState('');
    // get oauth code from que
    useEffect(() => {
        const { username, provider } = router.query;
        if (username && provider) {
            setCookie('user', username);
        }
        const user = getCookie('user');
        if (user) {
            setUser(user);
        } else {
            setUser('');
        }
    }, [user]);
    return (
        <Layout>
            <HMeta pageTitle="Dashboard" pageDescription="check your profile" pagePath="/dashboard" />
            <div>
                {user ? (
                    <>
                        {user} is signed in
                    </>
                ) : (<>
                    <div>not signed in</div>
                    <button onClick={() => router.push('/signin')}>Sign in</button>
                </>)}
            </div>
        </Layout>
    )
}
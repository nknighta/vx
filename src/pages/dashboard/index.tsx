import React, { useEffect, useState } from 'react';
import Layout from 'layout/main';
import HMeta from 'components/headmeta';
import { useRouter } from 'next/router';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import Image from 'next/image';
import { get } from 'http';
// this is dashboad page

export default function Dash() {
    const router = useRouter();
    const [status, setStatetus] = useState<boolean>(false);
    const [localCookie, setLocalCookie] = useState<string>('');
    const [localdebug, setLocalDebug] = useState<string>('');
    const username = router.query.username;
    const x = getCookie('username');
    const debug1 = getCookie("login")
    useEffect(() => {
        if (x !== undefined)
        {   
            setCookie('login', 'settinged login');
            setStatetus(false);
            setLocalCookie(x as string);
            setLocalDebug(debug1 as string);
        }
        else if (username) {
            setCookie('login', 'x9 router passed');
            setStatetus(true);
            setCookie('username', username as string);
            setLocalCookie(getCookie('username') as string);
            setLocalDebug(debug1 as string);
        } else {
            router.push('/signin');
            deleteCookie('login');
            deleteCookie('username');
        }
    }, [username])
    return (
        <Layout>
            <HMeta pageTitle="Dashboard" pageDescription="check your profile" pagePath="/dashboard" />
            <p>{localCookie}</p>
            <pre>
                <code>
                    {
                        JSON.stringify({ status: status, username: username , localCookie: localCookie, login: localdebug}, null, 1)}
                </code>
            </pre>
        </Layout >
    )
}

import React, { lazy, useEffect, useState } from 'react';
import Layout from 'layout/main';
import HMeta from 'components/headmeta';
import { useRouter } from 'next/router';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import { getWindowWidth } from 'scripts/getWidth';

// this is dashboad page
interface DashClientProps {
    username: string;
    status: boolean;
    localCookie: string;
    icon: string;
    id: string;
}

interface DashServerProps {
    accountid: string;
    accountname: string;
    icon: string;
}

export default function Dash() {
    const router = useRouter();
    const width = getWindowWidth();
    
    const home = router.query.home ? true : false;
    const [data, setData] = useState<DashClientProps>({
        username: '',
        status: false,
        localCookie: '',
        icon: "",
        id: ""
    });

    const username = router.query.username;
    const localcookie = getCookie('username');
    useEffect(() => {
        let x1 = document.cookie.split(';');
        console.dir(document.cookie.split(';'));
        console.log(x1[3]);
        if (username) {
            fetch(`/vx-inter-api/userdata/search/github/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userid: username }),
            })
                .then(res => res.json())
                .then(gdata => {
                    console.log(gdata);
                    
                    setData({
                        username: gdata.data.accountname,
                        status: true,
                        localCookie: localcookie as string,
                        icon: gdata.data.icon,
                        id: gdata.data.accountid
                    });
                    setCookie('username', gdata.data.accountname);
                    setCookie('userid', gdata.data.accountid);
                    setCookie('usericon', gdata.data.icon);
                    setCookie('userstatus', 'true');

                    router.push(`/dashboard/p2`);
                })
                .catch(err => console.log(err))
        } else if (localcookie) {
            const id = getCookie('userid');
            const namelocaled = getCookie('username');
            const icon = getCookie('usericon');
            setData({
                username: namelocaled as string,
                status: true,
                localCookie: localcookie,
                icon: icon as string,
                id: id as string
            });
        }

    }, [username])
    const handleLogout = () => {
        deleteCookie('username');
        deleteCookie('userid');
        deleteCookie('usericon');
        deleteCookie('userstatus');
        setData({
            username: '',
            status: false,
            localCookie: '',
            icon: '',
            id: ''
        });
        router.push('/signin');
    }
    return (
        <Layout>
            <HMeta pageTitle="Dashboard" pageDescription="check your profile" pagePath="/dashboard" />
            <div className={width > 960 ? 'flex': 'py-6 px-2'}>
                <div>
                    <Image
                        src={data.icon}
                        alt="icon"
                        width={100}
                        height={100} style={{
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                    />
                </div>
                <span className='w-2px bg-purple-7 mx-4' />
                <div>
                    <div className='bg-purple-7 w-auto py-3 px-2 rounded-lg'>
                        <p className='text-2xl'>{data.username}</p>
                        <div>
                            <p>@{data.id}</p>
                        </div>
                    </div>
                    <Link href='/dashboard/apps'>apps</Link>
                    <div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

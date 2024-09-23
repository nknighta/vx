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
    const [data, setData] = useState<DashClientProps>({
        username: '',
        status: false,
        localCookie: '',
        icon: "",
        id: ""
    });
    const [serverData, setServerData] = useState<DashServerProps>({
        accountid: '',
        accountname: '',
        icon: ''
    });

    const username = router.query.username;
    const localcookie = getCookie('username');
    useEffect(() => {
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
                    setServerData({
                        accountid: gdata.data.accountid,
                        accountname: gdata.data.accountname,
                        icon: gdata.data.icon
                    });
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

                    router.push(`/dashboard`);
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
    return (
        <Layout>
            <div>
                <HMeta pageTitle="Dashboard" pageDescription="check your profile" pagePath="/dashboard" />
                <h1 className='text-3xl'>Dashboard</h1>
                <Image src={data.icon} alt="icon" width={150} height={150} />
                <div className='bg-purple-7 w-auto py-3'>
                    <p className='text-2xl'>{data.username}</p>
                    <div>
                        <p>@{data.id}</p>
                        <button
                            className='bg-purple-9 p-1 rounded-md'
                            onClick={() => {
                                navigator.clipboard.writeText(`@${data.id}`);
                                alert('copied');
                            }}>
                            CopyID
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

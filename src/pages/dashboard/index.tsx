import React, { useEffect, useState } from 'react';
import Layout from 'layout/main';
import HMeta from 'components/headmeta';
import { useRouter } from 'next/router';
import { setCookie, getCookie,deleteCookie } from 'cookies-next';

// this is dashboad page
export default function Dash() {
    const router = useRouter();
    const [user, setUser] = useState('');
    // get oauth code from que
    
    return (
        <Layout>
            <HMeta pageTitle="Dashboard" pageDescription="check your profile" pagePath="/dashboard" />
            <div>
            </div>
        </Layout>
    )
}

import React, { useEffect, useState } from 'react';
import Layout from 'layout/main';
import Image from 'next/image';
import HMeta from 'components/headmeta';
import { useRouter } from 'next/router';

// this is dashboad page
export default function Dash(props) {
    const user = props.user;
    const router = useRouter();
    const code = router.query.code;
    const [data, setData] = useState(null);

    console.log(user);
    return (
        <Layout>
            <HMeta pageTitle="Dashboard" pageDescription="check your profile" pagePath="/dashboard" />
            <div>
                {data && (
                    <>
                        {JSON.stringify(data)}
                    </>
                )}
            </div>
        </Layout>
    )
}

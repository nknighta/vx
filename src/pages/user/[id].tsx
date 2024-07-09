import { useRouter } from 'next/router';
import React from 'react';
import Layout from 'layout/main';
import HMeta from 'components/headmeta';

export default function AccountDynamicGet() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <HMeta pageTitle="Account" />
            <h1>Account: {id}</h1>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}

AccountDynamicGet.getLayout = (page) => <Layout>{page}</Layout>
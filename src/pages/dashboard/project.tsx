import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'layout/main';
import HMeta from '../../components/headmeta';

export default function Project(context: any) {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout>
            <HMeta
                pageTitle="Your Project"
                pageDescription="VARIUS development team"
                pagePath="/dashboard/project"
                pageImg={'/api/og?title=Projects'} />
        </Layout>);
}
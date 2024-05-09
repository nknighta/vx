import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'layout/main';
export default function Project(context: any) {
    console.log(context.data.projectdata);
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout>
            {JSON.stringify(context.data.projectdata[0].name)}
            <p>{context.data.projectdata[0].name}</p>
            <p>{context.data.projectdata[0].description}</p>
            <p>{context.data.projectdata[0].id}</p>
            {id}
        </Layout>);
}

export async function getServerSideProps(context: any) {
    const res = await fetch('http://localhost:3000/api/data/user');
    const data = await res.json();
    return {
        props: { data },
    };
}
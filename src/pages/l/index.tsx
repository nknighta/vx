import HMeta from 'components/headmeta';
import Layout from 'layout/main';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';

export default function AppList() {
    const router = useRouter();
    const { url} = router.query;
    return (
        <Layout>
            <HMeta pageTitle="Loading..." />
            <p>https://{url}</p>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const { url } = context.query;

    if (!url) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
    return {
        redirect: {
            destination: `https://${url}`,
            permanent: false,
        },
    };
}
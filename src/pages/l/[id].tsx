import HMeta from 'components/headmeta';
import Layout from 'layout/main';
import { useRouter } from 'next/router';

export default function AppList() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout>
            <HMeta pageTitle="Loading..." />
            <a href={`https://varius.technology/l/${id}`}>https://varius.technology/l/{id}</a>
        </Layout>
    );
}
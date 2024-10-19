import HMeta from 'components/headmeta';
import { useRouter } from 'next/router';

export default function Dash() {
    const router = useRouter(); 
    return (
        <div>
            <HMeta pageTitle="redirecting..." />
        </div>
    )
}

export async function getServerSideProps(context) {
    const { req, res } = context;
    return {
        redirect: {
            destination: `/dashboard/`,
            permanent: false,
        },
    };
}
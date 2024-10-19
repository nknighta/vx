import HMeta from 'components/headmeta';

export default function Dash() {
    return (
        <div>
            <HMeta pageTitle="redirecting..." />
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        redirect: {
            destination: `/dashboard/`,
            permanent: true,
        },
    };
}
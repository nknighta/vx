import HMeta from 'components/headmeta';
import { useRouter } from 'next/router';

export default function Dash() {
    const router = useRouter(); 
    console.log("p2");
    router.push('/dashboard');
    return (
        <div>
            <HMeta pageTitle="redirecting..." />
        </div>
    )
}
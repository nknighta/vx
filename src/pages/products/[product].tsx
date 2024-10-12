import { useRouter } from 'next/router';

export default function Products() {
    const router = useRouter();
    const { product } = router.query;
    return <h1>Products: {product}</h1>
}
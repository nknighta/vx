import Layout from '../layout/main'
import HMeta from '../components/headmeta';
import Image from 'next/image';
import Link from 'next/link';
export default function About() {
    return (
        <>
            <Layout>
                <HMeta
                    pageTitle="About VARIUS"
                    pageDescription="VARIUS development team"
                    pagePath="/about"
                    pageImg={'/api/og?title=VX-WEB3&description=VARIUS%20development%20team'}
                />
                <h1>About</h1>
                <Image src={"/images/header.png"} width={1280 / 2} height={720 / 2} alt='team image' quality={80} loading={"lazy"} />
                <Link href="/l">
                    <p>aaa</p>
                </Link>
            </Layout>
        </>
    )
}
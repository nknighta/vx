import Layout from '../layout/main'
import HMeta from '../components/headmeta';
import Image from 'next/image';
export default function About() {
    return (
        <>
            <Layout>
                <HMeta
                    pageTitle="About"
                    pageDescription="VARIUS development team"
                    pagePath="/about"
                    pageImg={'/api/og?title=VX-WEB3&description=VARIUS%20development%20team'}
                />
                <h1>About</h1>
                <Image src={"/images/header.png"} width={1280 / 2 } height={720 / 2} alt='image' quality={100}/>
            </Layout>
        </>
    )
}
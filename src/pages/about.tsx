import Layout from '../layout/main'
import HMeta from '../components/headmeta';
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
                <p>about</p>
            </Layout>
        </>
    )
}
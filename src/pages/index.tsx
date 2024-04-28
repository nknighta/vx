import { useEffect, ReactNode,  } from 'react';
import Layout from 'layout/main';
import HMeta from 'components/headmeta';
import { getWindowWidth } from '../scripts/getWidth';
import { Center} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next'


const Home = () => {
    const router = useRouter();
    const width: number = getWindowWidth();
    return (
        <>
            <HMeta
                pageTitle='Redirecting'
                pageDescription='VARIUS development team'
                pageImg={'/api/og?title=Home'}
            />
            <Center>
                redirecting to  <Link href={"https://varius.technology"}>home</Link>...
            </Center>
        </>
    );
};

Home.getLayout = (page: ReactNode): JSX.Element => {
    return <Layout>{page}</Layout>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    debugger;
    return {
        redirect: {
            statusCode: 301,
            destination: 'https://varius.technology',
            fallback: false
        }
    };
};
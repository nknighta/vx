import { ReactElement, ReactNode, useEffect } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import './global.css';
import { SessionProvider } from "next-auth/react";

type AppPropsWithLayout = AppProps & {
    Component: NextPage & {
        getLayout?: (page: ReactElement) => ReactNode;
    };
};

// <Providers> is for react-query and wagmi sh
// import from 'components/provider'
export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
    const getLayout =
        Component.getLayout ||
        ((page) => {
            return page;
        });
    return getLayout(
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
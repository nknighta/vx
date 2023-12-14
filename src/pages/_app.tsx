import "./global.css";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

// fixed Generic type 'AppProps<P, IP, C>' requires 3 type argument(s).
type AppPropsWithLayout = AppProps & {
    Component: NextPage & {
        getLayout?: (page: ReactElement) => ReactNode;
    };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout =
        Component.getLayout ||
        ((page) => {
            return page;
        });
    return getLayout(
        <>
            <script src="http://localhost:8097"></script>
            <Component {...pageProps} />
        </>
    );
}

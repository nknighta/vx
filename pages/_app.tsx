import "./global.css";
import { ReactElement, ReactNode, useState, useEffect } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import {ChakraProvider} from "@chakra-ui/react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
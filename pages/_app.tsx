import "./global.css";
import { ReactElement, ReactNode, useState, useEffect } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import {ChakraProvider} from "@chakra-ui/react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return getLayout(
    <ChakraProvider>
        <Analytics />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
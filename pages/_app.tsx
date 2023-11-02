import "./global.css";
import { ReactElement, ReactNode, useState, useEffect } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
<<<<<<< HEAD
import { Analytics } from '@vercel/analytics/react';
=======
import {ChakraProvider} from "@chakra-ui/react";
>>>>>>> 281172ba5c13b86e33d1c36c5851d271d50837c2

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {

<<<<<<< HEAD
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return getLayout(
    <>
      <Analytics />
=======
  return (
    <ChakraProvider>
>>>>>>> 281172ba5c13b86e33d1c36c5851d271d50837c2
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '@unocss/reset/tailwind.css'

type AppPropsWithLayout = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
  }
}

// <Providers> is for react-query and wagmi sh
// import from 'components/provider'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page
    })
  return getLayout(
    <>
      <Component {...pageProps} />
    </>,
  )
}

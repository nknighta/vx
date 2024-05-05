import { Html, Main, NextScript, Head } from 'next/document'
import React, { useEffect } from 'react'

const MyDocument = () => {
  return (
    <Html>
      <Head />
      <body
        style={{
          height: 'auto',
          background: '#000012',
          color: '#fff',
          margin: '0 auto',
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument

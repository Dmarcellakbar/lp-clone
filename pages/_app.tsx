import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver" strategy="beforeInteractive" />
      <Component {...pageProps} /> 
    </ChakraProvider>
  )
}

export default MyApp

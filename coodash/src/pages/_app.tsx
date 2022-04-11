import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/Styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
  )
}

export default MyApp




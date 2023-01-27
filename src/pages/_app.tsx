import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { theme } from '@/styles/globals'
import { PlayerLayout } from './components/playerLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  )
}

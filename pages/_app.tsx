
import type { AppProps } from 'next/app';
import {ApolloProvider } from '@apollo/client';
import { useApollo } from '@/lib/apolloClient'
import { ThemeProvider } from 'styled-components'
import {GlobalStyle, theme} from '@/styles'

function MyApp({ Component, pageProps }: AppProps) {

  const client = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp

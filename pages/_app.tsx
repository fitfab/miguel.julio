import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#FF415C',
  },
}

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/ckerhsxkkqv0501yx4zs9bv50/master',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme} >
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp

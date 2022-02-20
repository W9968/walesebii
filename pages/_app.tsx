import { theming } from 'types/palette'
import type { AppProps } from 'next/app'
import { GlobalStyle } from 'styles/@global'
import { ThemeProvider } from 'styled-components'
import Layout from 'shared/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theming}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp

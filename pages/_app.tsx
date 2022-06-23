import Layout from 'layout/Layout'
import type { AppProps } from 'next/app'

import { GlobalStyle } from 'styles/@global'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from 'theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp

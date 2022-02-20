import { theming } from 'types/palette'
import type { AppProps } from 'next/app'
import { GlobalStyle } from 'styles/@global'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theming}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

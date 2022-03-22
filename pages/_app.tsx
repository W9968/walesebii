import { theming } from 'types/styled.d'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/_global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theming}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

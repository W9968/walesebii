import type { AppProps } from 'next/app'
import { useTheme } from 'hooks/useTheme'
import { GlobalStyle } from 'styles/_globals'
import { ThemeProvider } from 'styled-components'
import ComposedLayout from 'layout/ComposedLayout'
import { darkTheme, lightTheme } from 'theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme, componentMounted] = useTheme()
  if (!componentMounted) return <div />
  else
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <ComposedLayout theme={theme} toggleTheme={toggleTheme}>
          <Component {...pageProps} />
        </ComposedLayout>
      </ThemeProvider>
    )
}
export default MyApp

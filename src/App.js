import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import { useDarkMode } from './hooks/useDarkMode'
import { GlobalStyle, Wrapper, Main } from './hooks/useGlobalTheming'

import Header from './components/Header'

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()

  if (!componentMounted) {
    return <div />
  } else {
    return (
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Wrapper>
          <Main>
            <Header mode={theme} modeFunc={toggleTheme} />
          </Main>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App

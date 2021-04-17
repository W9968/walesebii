import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import { useDarkMode } from './hooks/useDarkMode'
import { GlobalStyle } from './hooks/useGlobalTheming'
import Toggle from './components/Toggle'

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themed = theme === 'dark' ? darkTheme : lightTheme

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themed}>
      <GlobalStyle />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App

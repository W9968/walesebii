import React from 'react'
import { useMenu } from './hooks/useMenu'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import { useDarkMode } from './hooks/useDarkMode'
import { GlobalStyle, Wrapper, Main } from './hooks/useGlobalTheming'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import Project from './views/Project'
import Contact from './views/Contact'
import Meta from './views/Meta'
import Writings from './views/Writings'

import Menu from './components/Menu/Menu'
import Footer from './components/Footer'
import Header from './components/Header'
import Cursor from './hooks/useCursor'
import NotFound from './views/NotFound'

import { motion as m } from 'framer-motion'

function App() {
  const { isMenuOpen } = useMenu()
  const [theme, toggleTheme, componentMounted] = useDarkMode()

  if (!componentMounted) {
    return <div />
  } else {
    return (
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Cursor />
        <Wrapper>
          <Router>
            <Main>
              <Header mode={theme} modeFunc={toggleTheme} />
              {isMenuOpen ? (
                <m.div
                  key='modal'
                  initial={{ opacity: 0, y: '-30%' }}
                  animate={{ opacity: 1, y: '0%' }}
                  transition={{ duration: 0.5, type: 'spring' }}>
                  <Menu />
                </m.div>
              ) : (
                <Switch>
                  <Route path='/writing' component={Writings} />
                  <Route path='/meta' component={Meta} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/project' component={Project} />
                  <Route exact path='/' component={Home} />
                  <Route path='*' component={NotFound} />
                </Switch>
              )}
              <Footer />{' '}
            </Main>
          </Router>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App

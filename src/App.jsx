import React from 'react'
import { useMenu } from './hooks/useMenu.jsx'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './hooks/useDarkMode.jsx'
import { lightTheme, darkTheme } from './Theme.jsx'
import { GlobalStyle, Wrapper, Main } from './hooks/useGlobalTheming.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer } from './layout/exports.jsx'

import {
  HomePage,
  ProjectPage,
  ContactPage,
  MetaPage,
  WritingPage,
  NotFoundPage,
  ShopPage,
  Auth,
} from './views/exports.jsx'

import Menu from './components/Menu/Menu.jsx'
import Cursor from './hooks/useCursor.jsx'

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
              <span style={{ flex: 1 }}>
                {isMenuOpen ? (
                  <m.div
                    key='modal'
                    initial={{ opacity: 0, y: '-10%' }}
                    animate={isMenuOpen && { opacity: 1, y: '0%' }}
                    transition={{ duration: 0.7, type: 'spring' }}>
                    <Menu />
                  </m.div>
                ) : (
                  <m.div
                    key='poper'
                    initial={{ opacity: 0, y: '-10%' }}
                    animate={!isMenuOpen && { opacity: 1, y: '0%' }}
                    transition={{ duration: 0.7, type: 'spring' }}>
                    <Switch>
                      <Route path='/authenticate' component={Auth} />
                      <Route path='/shop' component={ShopPage} />
                      <Route path='/writing' component={WritingPage} />
                      <Route path='/meta' component={MetaPage} />
                      <Route path='/contact' component={ContactPage} />
                      <Route path='/project' component={ProjectPage} />
                      <Route exact path='/' component={HomePage} />
                      <Route path='*' component={NotFoundPage} />
                    </Switch>
                  </m.div>
                )}
              </span>
              <Footer />
            </Main>
          </Router>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App

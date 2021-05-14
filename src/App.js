import React from 'react'
import { useMenu } from './hooks/useMenu'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import { useDarkMode } from './hooks/useDarkMode'
import { GlobalStyle, Wrapper, Main } from './hooks/useGlobalTheming'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './views/pages/Home'
import Project from './views/pages/Project'
import Contact from './views/pages/Contact'
import Meta from './views/pages/Meta'
import Writings from './views/pages/Writings'
import NotFound from './views/pages/NotFound'
import Shop from './views/pages/Shop'
import RequestAccess from './views/admin/RequestAccess'

import Menu from './components/Menu/Menu'
import Footer from './components/Footer'
import Header from './components/Header'
import Cursor from './hooks/useCursor'

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
                      <Route path='/req' component={RequestAccess} />
                      <Route path='/shop' component={Shop} />
                      <Route path='/writing' component={Writings} />
                      <Route path='/meta' component={Meta} />
                      <Route path='/contact' component={Contact} />
                      <Route path='/project' component={Project} />
                      <Route exact path='/' component={Home} />
                      <Route path='*' component={NotFound} />
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

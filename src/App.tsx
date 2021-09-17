// imports
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { motion } from 'framer-motion'

//theme imports
import { darkTheme } from 'themes/dark'
import { lightTheme } from 'themes/light'

// hooks calls
import { useMenu } from 'hooks/useMenu'
import { useTheme } from 'hooks/useTheme'
import Cursor from 'hooks/useCursor'
import ScrollTop from 'hooks/useScrollTop'

// global style
import { GlobalStyle, Wrapper, Main } from 'styles/Globale.element'

// compoents
import { NavBar, MenuBar, Footer } from 'components/exports'
import {
  Home,
  Meta,
  Contact,
  NotFound,
  Blogs,
  Preview,
  Project,
  Shop,
} from 'pages/exports'

function App() {
  const { isMenuOpen } = useMenu()
  const [theme, toggleTheme, componentMounted] = useTheme()

  if (!componentMounted) {
    return <div />
  } else {
    return (
      <>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Cursor />
          <Wrapper>
            <Router>
              <ScrollTop />
              <Main>
                <NavBar mode={theme} modeFunc={toggleTheme} />{' '}
                <span style={{ flex: 1 }}>
                  {isMenuOpen ? (
                    <motion.div
                      key='modal'
                      initial={{ opacity: 0, y: '-10%' }}
                      animate={isMenuOpen && { opacity: 1, y: '0%' }}
                      transition={{ duration: 0.7, type: 'spring' }}>
                      <MenuBar />
                    </motion.div>
                  ) : (
                    <motion.div
                      key='poper'
                      initial={{ opacity: 0 }}
                      animate={!isMenuOpen && { opacity: 1 }}
                      transition={{ duration: 0.7, type: 'spring' }}>
                      <Switch>
                        <Route path='/shop' component={Shop} />
                        <Route path='/project' component={Project} />
                        <Route path='/posts/:slug' component={Preview} />
                        <Route path='/writing' component={Blogs} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/meta' component={Meta} />
                        <Route exact path='/' component={Home} />
                        <Route path='*' component={NotFound} />
                      </Switch>
                    </motion.div>
                  )}
                </span>
                <Footer />
              </Main>
            </Router>
          </Wrapper>
        </ThemeProvider>
      </>
    )
  }
}

export default App

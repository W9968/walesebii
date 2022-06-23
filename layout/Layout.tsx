import Footer from 'components/footer/Footer'
import Nav from 'components/header/Nav'
import { FC, PropsWithChildren } from 'react'
import { AppBody, AppContainer } from 'styles/app.style'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppContainer>
      <Nav />
      <AppBody>{children}</AppBody>
      <Footer />
    </AppContainer>
  )
}

export default Layout

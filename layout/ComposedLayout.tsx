import { FC, ReactNode } from 'react'
import {
  FooterPageBottom,
  HeaderLogoHead,
  ToggleButtonComp,
} from 'components/export'
import { Layout, Main, NavBar } from 'styles/layout.module'

interface Iprops {
  theme: string
  toggleTheme: string
  children: ReactNode
}

const ComposedLayout: FC<Iprops> = ({ children, theme, toggleTheme }) => {
  return (
    <>
      <Main>
        <Layout>
          <NavBar>
            <HeaderLogoHead />
            <ToggleButtonComp mode={theme} onClick={toggleTheme} />
          </NavBar>
        </Layout>
        <Layout>{children}</Layout>
        <Layout>
          <FooterPageBottom />
        </Layout>
      </Main>
    </>
  )
}

export default ComposedLayout

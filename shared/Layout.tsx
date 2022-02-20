import { LayoutHeader } from 'components/export'
import { FC, ReactNode } from 'react'
import { Main, Section } from 'styles/layout.module'

interface Iprops {
  children: ReactNode
}

const Layout: FC<Iprops> = ({ children }) => {
  return (
    <Main>
      <Section>
        <LayoutHeader />
      </Section>
      <Section>{children}</Section>
    </Main>
  )
}

export default Layout

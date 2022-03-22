import { FC, ReactNode } from 'react'
import { Container, ContainerFluid } from 'styles/wrapper.module'

const Wrapper: FC<props> = ({ children, background = 'b' }) => {
  return (
    <ContainerFluid bg={background}>
      <Container>{children}</Container>
    </ContainerFluid>
  )
}

export default Wrapper

type props = {
  children: ReactNode
  background: 'b' | 'g' | 'w'
}

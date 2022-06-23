import Logo from 'components/logo/Logo'
import { FC } from 'react'
import { StyledFooter } from 'styles/footer.style'

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Logo />
    </StyledFooter>
  )
}

export default Footer

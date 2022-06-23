import { FC, ReactElement } from 'react'
import { StyledIconButton } from 'styles/button.style'

const SocialButton: FC<ComponentProp & Record<string, any>> = ({
  icon,
  ...rest
}) => {
  return <StyledIconButton {...rest}>{icon}</StyledIconButton>
}

type ComponentProp = {
  icon: ReactElement
}

export default SocialButton

import { FC, ReactElement } from 'react'
import { StyledEditField, StyledIcon, StyledInput } from 'styles/input.style'

const Input: FC<ComponentProp & Record<string, any>> = function ({
  placeholder,
  onClick,
  icon,
  ...rest
}) {
  return (
    <StyledEditField>
      <StyledInput placeholder={placeholder} {...rest} />
      <StyledIcon onClick={onClick}>{icon}</StyledIcon>
    </StyledEditField>
  )
}

type ComponentProp = {
  placeholder: string
  icon: ReactElement
  onClick?: () => void
}

export default Input

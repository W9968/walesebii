import { FC, ReactElement } from 'react'
import { StyledText } from 'styles/text.style'

const Text: FC<ComponentProp & Record<string, any>> = ({
  content,
  size = 16,
  weight = 400,
  align = 'start',
  color = 'default',
  capitalize = 'none',
  ...rest
}) => {
  return (
    <StyledText
      {...rest}
      size={size}
      color={color}
      align={align}
      weight={weight}
      capitalize={capitalize}>
      {content}
    </StyledText>
  )
}

export type ComponentProp = {
  size?: number
  content: string | ReactElement
  align?: 'start' | 'center' | 'end' | 'justify'
  capitalize?: 'none' | 'upper' | 'first' | 'lower'
  color?: 'white' | 'gray' | 'error' | 'success' | 'dark' | 'default'
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
}
export default Text

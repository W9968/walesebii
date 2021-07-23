import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    text: string
    body: string
    hover: string
    select: string
    lightText: string
  }
}

export const darkTheme: DefaultTheme = {
  text: '#eaeaea',
  body: '#111111',
  hover: '#222222',
  select: '#1bffcd',
  lightText: '#666666',
}

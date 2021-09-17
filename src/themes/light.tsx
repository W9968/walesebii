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

export const lightTheme: DefaultTheme = {
  text: '#1f1f25',
  body: '#d7dae1',
  hover: '#efefef',
  select: '#1bffcd',
  lightText: '#666666',
}

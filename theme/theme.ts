import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    primary: {
      accent_0: string
      accent_100: string
      accent_200: string
      accent_300: string
      accent_400: string
      accent_500: string
      accent_600: string
      accent_700: string
      accent_800: string
      accent_900: string
    }
    secondary: {}
    accent: {}
  }
}

export const darkTheme: DefaultTheme = {
  primary: {
    accent_0: '#fafafa',
    accent_100: '#d4d4d8',
    accent_200: '#a1a1aa',
    accent_300: '#5C5F66',
    accent_400: '#373A40',
    accent_500: '#2C2E33',
    accent_600: '#25262B',
    accent_700: '#1A1B1E',
    accent_800: '#141517',
    accent_900: '#111111',
  },
  secondary: {},
  accent: {},
}

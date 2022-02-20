import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    scheme: {
      background: string
      foreground: string
    }

    units: {
      _16: string // p
      _18: string // h4
      _28: string // h3
      _36: string // h2
      _48: string // h1
    }
  }
}

export const theming: DefaultTheme = {
  scheme: {
    background: '#16161a',
    foreground: '#fffffe',
  },

  units: {
    _16: '1em',
    _18: '1.125',
    _28: '1.75em',
    _36: '2.25em',
    _48: '3em',
  },
}

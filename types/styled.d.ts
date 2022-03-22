import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    scheme: {
      background: string
      foreground: string
      dominant: string

      accent_1: string
      accent_2: string
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
    background: '#000000',
    foreground: '#fffffc',
    // dominant: '#8ec5fc',
    dominant: '#96e6a1',

    accent_1: '#f9f9f9',
    accent_2: '#596164',
  },

  units: {
    _16: '1em',
    _18: '1.125em',
    _28: '1.75em',
    _36: '2.25em',
    _48: '3em',
  },
}

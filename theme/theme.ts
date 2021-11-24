import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    scheme: {
      body: string
      text: string
    }
    accent: {
      primary: string
      secondary: string
      hover: string
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

export const lightTheme: DefaultTheme = {
  scheme: {
    body: '#fcfbfc',
    text: '#0e141b',
  },
  accent: {
    primary: '#ff2957',
    secondary: '#656565',
    hover: '#ff5277',
  },
  units: {
    _16: '1em',
    _18: '1.125',
    _28: '1.75em',
    _36: '2.25em',
    _48: '3em',
  },
}

export const darkTheme: DefaultTheme = {
  scheme: {
    body: '#0e141b',
    text: '#e4e4e4',
  },
  accent: {
    primary: '#ff5277',
    secondary: '#9e9e9e',
    hover: '#ff2957',
  },
  units: {
    _16: '1em',
    _18: '1.125',
    _28: '1.75em',
    _36: '2.25em',
    _48: '3em',
  },
}

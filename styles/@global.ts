import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  html,
  body {  
    display:flex;
    max-width: 100%;
    font-weight: 400;
    min-height: 100vh;
    flex-direction: column;
    backface-visibility:hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.primary.accent_100};
    background: ${({ theme }) => theme.primary.accent_900};
  }
`

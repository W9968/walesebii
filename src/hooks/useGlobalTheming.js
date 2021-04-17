import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {  
    margin: 0px;
    padding: 0px;
    display:flex;
    max-width: 100%;
    min-height: 100vh;
    align-items:center;
    flex-direction: column;
    justify-content:center;
    backface-visibility:hidden;
    text-rendering: optimizeLegibility;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
  }
`

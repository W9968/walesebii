import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
      margin: 0px;
      padding: 0px;
      display:flex;
      width: 100%;
      min-height: 100vh;
      align-items:center;
      flex-direction: column;
      justify-content:center;
      transition: all 0.3s ease-in-out;
      color: ${({ theme }) => theme.text};
      background-color: ${({ theme }) => theme.body};
  }
`

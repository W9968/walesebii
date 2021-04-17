import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html,
  body {  
    display:flex;
    max-width: 100%;
    min-height: 100vh;
    flex-direction: column;
    backface-visibility:hidden;
    text-rendering: optimizeLegibility;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    font-family: proxima-nova, sans-serif;
  }

  ::selection {
    color: #111;
    background-color: #1bffcd
  }

`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: none;
`

export const Main = styled.main`
  width: 720px;
  min-height: 100vh;
  margin: 0px auto;
  padding: 96px 16px;
  background-color: none;

  @media (max-width: 720px) {
    width: 100%;
    padding: 32px 16px;
  }
`

import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    cursor: none !important;
  }
  html,
  body {  
    display:flex;
    max-width: 100%;
    min-height: 100vh;
    flex-direction: column;
    backface-visibility:hidden;
    text-rendering: optimizeLegibility;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    font-family: proxima-nova, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  ::selection {
    color: #fff;
    background-color: ${(props) => props.theme.select}
  }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: none; 
  }
 
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    filter: contrast(0.75);
    background: ${(props) => props.theme.text};
  }
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: none;
`

export const Main = styled.main`
  display: flex;
  width: 720px;
  min-height: 100vh;
  margin: 0px auto;
  padding: 96px 16px;
  background-color: none;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 720px) {
    width: 100%;
    padding: 32px 16px;
  }
`

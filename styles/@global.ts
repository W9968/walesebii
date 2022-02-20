import { createGlobalStyle } from 'styled-components'

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
    font-weight: 500;
    min-height: 100vh;
    flex-direction: column;
    backface-visibility:hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme.scheme.foreground};
    background-color: ${(props) => props.theme.scheme.background};
  }
  
  ::selection {
    color: #111;
    background-color: ${(props) => props.theme.scheme.foreground}
  }
  
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    margin-top: 5px;
    background: none; 
    margin-bottom: 5px;
    
  }
 
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) => props.theme.scheme.background};
  }
  h1 { line-height: 1.05em}
  h4 { line-height: 1.2em }
  p { line-height: 1.375em }
  h2,h3 { line-height: 1.25em}
`

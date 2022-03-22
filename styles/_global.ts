import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
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
    color: ${(props) => props.theme.scheme.background};
  }
  
  ::selection {
    color: #fff;
    background-color: blue
  }
  
  /* width */
  ::-webkit-scrollbar {
    width: 0px;
    height: 5px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: none
    
  }
 
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
  h1 { line-height: 1.05em}
  h4 { line-height: 1.2em }
  p { line-height: 1.375em }
  h2,h3 { line-height: 1.25em}
  button, input, a {
    font-family: 'Inter', sans-serif;
  }
`

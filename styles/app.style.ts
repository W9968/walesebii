import styled from 'styled-components'

export const AppContainer = styled.main`
  width: 716px;
  padding: 1rem;
  display: flex;
  margin: 0 auto;
  min-height: 100vh;
  flex-direction: column;

  @media (max-width: 716px) {
    width: 100%;
  }
`

export const AppBody = styled.section`
  flex: 1;
`

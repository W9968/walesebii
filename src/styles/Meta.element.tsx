import styled from 'styled-components'

export const Section = styled.section`
  ul {
    margin: 0px 20px;
  }
  .divider {
    height: 3px;
    width: 100px;
    margin: 48px auto;
    background: linear-gradient(-90deg, #ddd6f3, #faaca8);
  }
  .gravatar {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;
  /* gradient */
  background-clip: text;
  background: -webkit-linear-gradient(right, #ddd6f3 80%, #faaca8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const List = styled.ul`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`

export const Parag = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`

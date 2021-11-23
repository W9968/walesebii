import styled from 'styled-components'

export const Main = styled.main`
  width: 720px;
  height: 100vh;
  display: flex;
  max-width: 720px;
  min-height: 100vh;
  margin: 0rem auto;
  flex-direction: column;
  padding-top: calc(${(props) => props.theme.units._48} * 2);
  padding-bottom: calc(${(props) => props.theme.units._48} * 1);

  @media (max-width: 720px) {
    width: 100%;
    padding-top: calc(${(props) => props.theme.units._48} / 2);
  }
`

export const Layout = styled.section`
  padding: ${(props) => props.theme.units._16};

  &:not(:first-child, :last-child) {
    flex: 1;
  }
`

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

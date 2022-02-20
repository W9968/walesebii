import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Line = styled.div`
  flex: 1;
  height: 2px;
  margin: 0px ${({ theme }) => theme.units._28};
  background: ${({ theme }) => theme.accent.light_background};
`

export const NavigationListContainer = styled.div`
  > a {
    margin-left: 5px;
    :first-child {
      margin-left: 0;
    }
  }
`

export const NavigationLink = styled.a`
  border-radius: 10px;
  text-decoration: none;
  text-transform: capitalize;
  padding: 10px ${({ theme }) => theme.units._28};
  font-size: ${({ theme }) => theme.units._16};
  color: ${({ theme }) => theme.scheme.foreground};

  &:hover {
    background: ${({ theme }) => theme.accent.light_background};
  }
`

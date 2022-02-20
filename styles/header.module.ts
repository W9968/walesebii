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

export const NavigationListContainer = styled.div``

export const NavigationLink = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 5px;
  letter-spacing: 0.5px;
  text-decoration: none;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.units._16};
  color: ${({ theme }) => theme.scheme.foreground};

  &:hover {
    background: ${({ theme }) => theme.accent.light_background};
  }
`

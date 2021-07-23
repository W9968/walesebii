import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.nav`
  display: flex;
  margin-bottom: 64px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  .icons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const Link = styled.button`
  padding: 10px;
  display: flex;
  border: none;
  outline: none;
  margin: 0px 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  background-color: transparent;
  justify-content: center;
  color: ${(props) => props.theme.text};
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.hover};
  }
`

export const Wrapper = styled(NavLink)`
  width: 100%;
  border: none;
  display: flex;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  background: none;
  padding: 15px 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 0.5em;
  text-decoration: none;
  letter-spacing: 0.58px;
  justify-content: space-between;
  color: ${(props) => props.theme.text};
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .title {
    margin: 0px 10px;
  }
  .icon {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    justify-content: center;
  }
`

export const Parag = styled.p`
  margin: 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
  text-transform: capitalize;
`

export const Command = styled.p`
  width: 32px;
  height: 32px;
  margin: 0px;
  display: flex;
  opacity: 0.7;
  padding: 5px;
  align-items: center;
  border-radius: 12px;
  font-size: 1.125rem;
  filter: contrast(0.75);
  justify-content: center;
  text-transform: capitalize;
  background-color: ${(props) => props.theme.hover};
`

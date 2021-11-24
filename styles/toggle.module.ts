import styled from 'styled-components'

export const SwitchToggleTheme = styled.button`
  border: none;
  padding: 8px;
  display: flex;
  outline: none;
  cursor: pointer;
  font-size: 22.5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.scheme.text};
  border-radius: ${(props) => props.theme.units._16};
  background-color: ${(props) => props.theme.scheme.body};
`

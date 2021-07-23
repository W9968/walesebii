import styled from 'styled-components'

export const Section = styled.section``

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;
  /* gradient */
  background-clip: text;
  background: -webkit-linear-gradient(right, #7b4397 80%, #dc2430);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Parag = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`

export const Wrapper = styled.div`
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
  .shortcut {
    margin: 0px;
    display: flex;
    opacity: 0.7;
    padding: 5px 10px;
    flex-direction: row;
    align-items: center;
    border-radius: 12px;
    filter: contrast(0.75);
    justify-content: center;
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

export const UnderLine = styled.p`
  margin: 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`

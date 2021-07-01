import React from 'react'
import styled from 'styled-components'

const Information = ({ svg, info }) => {
  return (
    <>
      <Wrapper>
        <Name>
          <span className='icon'>{svg}</span>
          <Parag className='title'>{info}</Parag>
        </Name>
      </Wrapper>
    </>
  )
}

export default Information

const Wrapper = styled.div`
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
  color: ${({ theme }) => theme.text};

  &:hover {
    background-color: ${({ theme }) => theme.hover};
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
    background-color: ${({ theme }) => theme.hover};
  }
`

const Name = styled.div`
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

const Parag = styled.p`
  margin: 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`
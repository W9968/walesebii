import React from 'react'
import styled, { keyframes } from 'styled-components'

const _Loading = () => {
  return (
    <>
      <PulseLoader />
    </>
  )
}

export default _Loading

const pulsate = keyframes`
    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 1.0;}
    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
`

const PulseLoader = styled.div`
  opacity: 0;
  width: 18px;
  height: 18px;
  border: 3px solid #999;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  animation: ${pulsate} 1s ease-out;
  animation-iteration-count: infinite;
`

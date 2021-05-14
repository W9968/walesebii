import React, { useState } from 'react'
import styled from 'styled-components'

const RequestAccess = () => {
  const [hasher, setHashed] = useState({
    value: '',
    match: false,
  })
  return (
    <>
      <Modal>
        <Input
          type='text'
          placeholder='type here'
          onChange={(e) => setHashed({ value: e.target.value })}
        />
      </Modal>
      {JSON.stringify(hasher)}
    </>
  )
}

export default RequestAccess

const Modal = styled.div`
  display: flex;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  height: calc(3.5 * 2rem);
`
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};
`

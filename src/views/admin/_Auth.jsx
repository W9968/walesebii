import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { motion as m } from 'framer-motion'
import { BsArrowLeft, BsLock } from 'react-icons/bs'
import useFetch from '../../hooks/useFetch'
import { useHistory } from 'react-router-dom'

const _Auth = () => {
  const history = useHistory()
  const [type, setType] = useState('')
  const [pswd, setPswd] = useState('')
  const [rotate, setRotation] = useState(0)

  useEffect(() => {
    axios
      .get('http://api.ipify.org/?format=json')
      .then((res) => localStorage.setItem('ip', res.data.ip))
  }, [])

  return (
    <>
      <Wrapper>
        <Title>hello walee</Title>
        <Parag>
          Enter the secret key to be able to access admin panel, more than 3
          wrong attempts will be considered spam and your IP will be blocked
          from accessing this route.
        </Parag>
        <InputGroup
          style={{
            background:
              type === 'error' ? '#ee0000' : type === 'success' && '#29BC9B',
          }}>
          <BsLock className='icon' />
          <Input
            type='password'
            onChange={(e) => {
              setPswd(e.target.value)
              setType('')
            }}
          />
          <div
            onMouseEnter={() => setRotation(rotate + 180)}
            onMouseLeave={() => setRotation(rotate + 180)}>
            <Button
              onClick={() => {
                useFetch
                  .post('/auth', {
                    pass: pswd,
                  })
                  .then((res) => {
                    res.data.message === 'you good to go'
                      ? setType('success')
                      : setType('error')

                    setTimeout(() => {
                      if (res.data.message === 'you good to go') {
                        sessionStorage.setItem('session', true)
                        history.push('/panel')
                      } else {
                        sessionStorage.clear()
                      }
                    }, 1000)
                  })
              }}>
              <m.span style={{ display: 'flex' }} animate={{ rotate: rotate }}>
                <BsArrowLeft />
              </m.span>
            </Button>
          </div>
        </InputGroup>
      </Wrapper>
    </>
  )
}

export default _Auth

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;
`

const Parag = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  padding: 0 10px;
  margin-top: 50px;
  align-items: center;
  flex-direction: row;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.hover};

  .icon {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
  }
`

const Input = styled.input`
  flex: 1;

  border: none;
  outline: none;
  padding: 1rem;
  font-size: 1rem;
  color: var(--he);
  background: none;
  text-align: center;

  &::-ms-reveal {
    cursor: none;
    filter: invert(100%);
    /* The eye icon is implemented as a background image. 
  You can change the background color with the background-color 
  property but to change the foreground color you would need to 
  create your own image and replace it with the background-image 
  property. */
  }
`

const Button = styled.button`
  padding: 5px;
  border: none;
  display: flex;
  outline: none;
  font-size: 1.7rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};
`

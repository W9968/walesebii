import { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { RiLoader2Line } from 'react-icons/ri'

const Spinner: FC = () => {
  return (
    <LoaderWrapper>
      <Loading
        animate={{ rotate: 180 }}
        transition={{ repeat: Infinity, duration: 2 }}>
        <RiLoader2Line size={24} />
      </Loading>
    </LoaderWrapper>
  )
}

export default Spinner

const LoaderWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loading = styled(motion.span)`
  top: 50%;
  display: flex;
  width: fit-content;
`

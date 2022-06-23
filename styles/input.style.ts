import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledEditField = styled(motion.div)`
  width: 100%;
  height: 42px;
  display: flex;
  position: relative;
  align-items: center;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 16px;
  position: absolute;
  padding: 0rem 1rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.primary.accent_200};
  background: ${({ theme }) => theme.primary.accent_700};
  border: 2px solid ${({ theme }) => theme.primary.accent_700};

  &:focus {
    border: 2px solid ${({ theme }) => theme.primary.accent_300};
  }
`

export const StyledIcon = styled.div`
  z-index: 1;
  width: 28px;
  height: 28px;
  display: flex;
  position: absolute;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  left: calc(100% - 0.25rem);
  transform: translateX(calc(-100% - 0.25rem));
  color: ${({ theme }) => theme.primary.accent_100};
  background: ${({ theme }) => theme.primary.accent_500};
`

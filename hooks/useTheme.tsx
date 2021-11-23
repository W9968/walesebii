import { useState, useEffect } from 'react'

export const useTheme = (): any[] => {
  const [theme, setTheme] = useState('dark')
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = (mode: string): void => {
    localStorage.setItem('mode', mode)
    setTheme(mode)
  }

  const toggleTheme = (): void => {
    theme === 'dark' ? setMode('light') : setMode('dark')
  }

  useEffect((): void => {
    const localTheme = localStorage.getItem('mode')
    localTheme ? setTheme(localTheme) : setMode('dark')
    setComponentMounted(true)
  }, [])

  return [theme, toggleTheme, componentMounted]
}

import { useState, useEffect } from 'react'

export const useTheme = (): any[] => {
  const [theme, setTheme] = useState('light')
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = (mode: string): void => {
    localStorage.setItem('mode', mode)
    setTheme(mode)
  }

  const toggleTheme = (): void => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect((): void => {
    const localTheme = localStorage.getItem('mode')
    localTheme ? setTheme(localTheme) : setMode('light')
    setComponentMounted(true)
  }, [])

  return [theme, toggleTheme, componentMounted]
}

import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [theme, setTheme] = useState('dark')
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = (mode) => {
    localStorage.setItem('mode', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === 'dark' ? setMode('light') : setMode('dark')
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('mode')
    localTheme ? setTheme(localTheme) : setMode('dark')
    setComponentMounted(true)
  }, []) // eslint-disabel-line

  return [theme, toggleTheme, componentMounted]
}

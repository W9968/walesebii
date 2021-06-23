import React, { useContext, useState } from 'react'

export const useToggle = (initialState) => {
  const [isToggled, setToggle] = useState(initialState)
  const toggle = () => setToggle((prevState) => !prevState)
  return { isToggled, setToggle, toggle }
}

const initState = {
  isMenuOpen: false,
  toggle: () => {},
}

export const MenuContext = React.createContext(initState)

const MenuProvider = ({ children }) => {
  const { isToggled, setToggle, toggle } = useToggle(false)
  const closeMenu = () => setToggle(false)
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: isToggled,
        toggleMenu: toggle,
        closeMenu,
      }}>
      {children}
    </MenuContext.Provider>
  )
}
export default MenuProvider

export const useMenu = () => {
  return useContext(MenuContext)
}

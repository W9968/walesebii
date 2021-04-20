import React, { useContext, useState } from 'react'

export const useToggle = (initialState) => {
  const [isToggled, setToggle] = useState(initialState)
  const toggle = () => setToggle((prevState) => !prevState)
  // return [isToggled, toggle];
  return { isToggled, setToggle, toggle }
}

const initialState = {
  isMenuOpen: false,
  toggle: () => {},
}

const MenuContext = React.createContext(initialState)

export function useMenu() {
  return useContext(MenuContext)
}

export default function MenuProvider({ children }) {
  const { isToggled, setToggle, toggle } = useToggle(false)
  const closeMenu = () => setToggle(false)

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: isToggled,
        toggle: toggle,
        closeMenu,
      }}>
      {children}
    </MenuContext.Provider>
  )
}

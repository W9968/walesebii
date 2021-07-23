import React, { useContext, useState } from 'react'

const useToggle = (initialState: boolean): any => {
  const [isToggled, setToggle] = useState(initialState)
  const toggle = (): void => setToggle((prevState: boolean) => !prevState)
  return { isToggled, setToggle, toggle }
}

type Props = {
  children: React.ReactChild
}

interface IMenuContext {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

const initState: IMenuContext = {
  isMenuOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
}

export const MenuContext = React.createContext<IMenuContext>(initState)

const MenuProvider: React.FC<Props> = ({ children }): JSX.Element => {
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

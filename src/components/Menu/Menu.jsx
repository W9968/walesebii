import React from 'react'
import MenuItem from './MenuItem.jsx'
import {
  BiHomeAlt,
  BiFile,
  BiMailSend,
  BiEdit,
  BiShoppingBag,
} from 'react-icons/bi'

const Menu = () => {
  return (
    <>
      {paths.map((item, i) => {
        return (
          <MenuItem
            key={i}
            link={item.location}
            svg={item.icon}
            path={item.name}
            command={item.command}
          />
        )
      })}
    </>
  )
}

export default Menu

export const paths = [
  { location: '/', name: 'home', icon: <BiHomeAlt />, command: 'h' },
  { location: '/project', name: 'project', icon: <BiFile />, command: 'p' },
  { location: '/writing', name: 'writing', icon: <BiEdit />, command: 'w' },
  { location: '/shop', name: 'shop', icon: <BiShoppingBag />, command: 's' },
  { location: '/contact', name: 'contact', icon: <BiMailSend />, command: 'c' },
]

import React from 'react'
import MenuItem from './Menu/MenuItem'
import { BiHomeAlt, BiFile, BiMailSend, BiEdit } from 'react-icons/bi'

const ListMenu = () => {
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

export default ListMenu

export const paths = [
  { location: '/', name: 'home', icon: <BiHomeAlt />, command: 'a' },
  { location: '/project', name: 'project', icon: <BiFile />, command: 'p' },
  { location: '/contact', name: 'contact', icon: <BiMailSend />, command: 'c' },
  { location: '/writing', name: 'writing', icon: <BiEdit />, command: 'r' },
]

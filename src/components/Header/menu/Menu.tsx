import React from 'react'
import { paths } from './paths'
import MenuItem from './MenuItem'

const Menu: React.FC = () => {
  return (
    <>
      {paths.map((item, i: number) => {
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

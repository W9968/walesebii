import React from 'react'
import MenuItem from './MenuItem'
import { Ipaths, paths } from './paths'

const Menu: React.FC = () => {
  return (
    <>
      {paths.map((item: Ipaths, i: number) => {
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

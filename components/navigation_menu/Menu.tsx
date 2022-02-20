import Link from 'next/link'
import { FC } from 'react'
import { NavigationLink, NavigationListContainer } from 'styles/header.module'
import { arrayRoutesMenu, IrouteNavigation } from './routesMenu.interface'

const Menu: FC = () => {
  return (
    <NavigationListContainer>
      {arrayRoutesMenu.map((el: IrouteNavigation, key) => {
        return (
          <Link key={key} passHref href={el.path}>
            <NavigationLink>{el.name}</NavigationLink>
          </Link>
        )
      })}
    </NavigationListContainer>
  )
}

export default Menu

import Link from 'next/link'
import { FC } from 'react'
import { NavigationLink, NavigationListContainer } from 'styles/header.module'

const Menu: FC = () => {
  return (
    <NavigationListContainer>
      {arrayRoutesMenu.map((el: IrouteNavigation, key: number) => {
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

type IrouteNavigation = {
  path: string
  name: string
}

const arrayRoutesMenu: IrouteNavigation[] = [{ path: '/blog', name: 'shelf' }]

import { FC } from 'react'
import { useRouter } from 'next/router'
import { FiGithub } from 'react-icons/fi'

import {
  StyledNav,
  StyledLinks,
  StyledNavigationButton,
} from 'styles/nav.style'

import Link from 'next/link'
import Text from 'components/text/Text'
import SocialButton from 'components/button/SocialButton'

const Nav: FC = () => {
  const { pathname } = useRouter()

  return (
    <StyledNav>
      <StyledLinks>
        {menu_navigation_array.map((el, key) => (
          <Link key={key} href={`/${el.path}`} passHref>
            <StyledNavigationButton>
              <Text
                size={16}
                content={el.name}
                capitalize={'first'}
                weight={pathname.split('/')[1] === el.path ? 700 : 600}
                color={pathname.split('/')[1] === el.path ? 'white' : 'gray'}
              />
            </StyledNavigationButton>
          </Link>
        ))}
      </StyledLinks>
      <SocialButton
        icon={
          <a
            target={'_blank'}
            rel={'noreferrer'}
            href={'https://github.com/nyuuke'}>
            <FiGithub size={21} color={'#a1a1aa'} />
          </a>
        }
      />
    </StyledNav>
  )
}

const menu_navigation_array = [
  {
    path: '',
    name: 'home',
  },
  {
    path: 'blog',
    name: 'shelf',
  },
  {
    path: 'project',
    name: 'craft',
  },
]

export default Nav

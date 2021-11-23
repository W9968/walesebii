import { FC } from 'react'
import Link from 'next/link'
import { Social, Twitter, Github, Info } from 'styles/Footer.module'

const Socials: FC = () => {
  return (
    <>
      <Social>
        <a href='https://twitter.com/oryvle' target={'_blank'} rel='noreferrer'>
          <Twitter />
        </a>
        <a href='https://github.com/nyuuke' target={'_blank'} rel='noreferrer'>
          <Github />
        </a>
        <Link href={'/meta'} passHref>
          <a>
            <Info />
          </a>
        </Link>
      </Social>
    </>
  )
}

export default Socials

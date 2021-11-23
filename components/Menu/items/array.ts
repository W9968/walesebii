import { ReactChild } from 'react'

export interface Iarray {
  path: string
  uuidp: string
}

export const menuArry: Iarray[] = [
  { path: 'projects', uuidp: '[projects]' },
  { path: 'writing', uuidp: '[writing]' },
  { path: 'contact', uuidp: '[contact]' },
  { path: 'meta', uuidp: '[meta]' },
]

export interface Iarray1 {
  icon?: ReactChild
  link: string
  name: string
}

export const menuIconArray: Iarray1[] = [
  { link: 'https://github.com/nyuuke', name: 'github' },
  { link: 'https://twitter.com/oryvle', name: 'twitter' },
]

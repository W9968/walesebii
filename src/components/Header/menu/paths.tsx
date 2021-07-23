import {
  BiHomeAlt,
  BiFile,
  BiMailSend,
  BiEdit,
  BiShoppingBag,
} from 'react-icons/bi'

export const paths: any[] = [
  { location: '/', name: 'home', icon: <BiHomeAlt />, command: 'h' },
  { location: '/project', name: 'project', icon: <BiFile />, command: 'p' },
  { location: '/writing', name: 'writing', icon: <BiEdit />, command: 'w' },
  { location: '/shop', name: 'shop', icon: <BiShoppingBag />, command: 's' },
  { location: '/contact', name: 'contact', icon: <BiMailSend />, command: 'c' },
]

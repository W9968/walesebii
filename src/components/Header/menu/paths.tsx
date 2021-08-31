import React from 'react'
import {
  BiHomeAlt,
  BiFile,
  BiMailSend,
  BiEdit,
  BiShoppingBag,
} from 'react-icons/bi'

export interface Ipaths {
  location: string
  name: string
  icon: React.ReactChild
  command: string
}

export const paths: Ipaths[] = [
  { location: '/', name: 'home', icon: <BiHomeAlt />, command: 'h' },
  { location: '/project', name: 'project', icon: <BiFile />, command: 'p' },
  { location: '/writing', name: 'writing', icon: <BiEdit />, command: 'w' },
  { location: '/shop', name: 'shop', icon: <BiShoppingBag />, command: 's' },
  { location: '/contact', name: 'contact', icon: <BiMailSend />, command: 'c' },
]

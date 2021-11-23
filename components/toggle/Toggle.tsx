import { FC } from 'react'
import { SwitchToggleTheme } from 'styles/toggle.module'

import Sun from './icons/Sun'
import Moon from './icons/Moon'

interface Iprops {
  mode: string
}

const Toggle: FC<Iprops & Record<string, any>> = ({ mode, ...rest }) => {
  return (
    <SwitchToggleTheme {...rest}>
      {mode === 'light' ? <Moon /> : <Sun />}
    </SwitchToggleTheme>
  )
}

export default Toggle

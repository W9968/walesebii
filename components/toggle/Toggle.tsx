import { FC } from 'react'
import { SwitchToggleTheme } from 'styles/toggle.module'

import Sun from './icons/Sun'
import Moon from './icons/Moon'
import useSound from 'use-sound'

interface Iprops {
  mode: string
}

const Toggle: FC<Iprops & Record<string, any>> = ({ mode, ...rest }) => {
  const [playOff] = useSound('/sound/clickoff.mp3')
  const [playOn] = useSound('/sound/clickon.mp3')

  return (
    <SwitchToggleTheme
      {...rest}
      onMouseDown={(): void => (mode === 'light' ? playOff() : playOn())}>
      {mode === 'light' ? <Moon /> : <Sun />}
    </SwitchToggleTheme>
  )
}

export default Toggle

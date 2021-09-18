import React from 'react'
const AnimatedCursor = require('react-animated-cursor')

const isMobile = (): any => {
  const ua = navigator.userAgent
  return /Android|Mobi/i.test(ua)
}

const Cursor: React.FC = () => {
  if (typeof navigator !== 'undefined' && isMobile()) return null

  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={8}
        color='238, 0, 0'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </>
  )
}

export default Cursor

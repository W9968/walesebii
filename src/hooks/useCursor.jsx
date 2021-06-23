import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const isMobile = () => {
  const ua = navigator.userAgent
  return /Android|Mobi/i.test(ua)
}

const Cursor = () => {
  if (typeof navigator !== 'undefined' && isMobile()) return null

  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={8}
        color='27, 255, 205'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </>
  )
}

export default Cursor

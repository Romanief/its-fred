import React from 'react'
import SlidingText from './SlidingText'

function Title() {
  return (
    <div>
      <SlidingText
      text="Hey,"
      offsetX={-60}
      offsetY={100}
      size={"90px"}
      color={"#FFFCFF"}
      delay={200}
      ratioX={0.3}
      ratioY={-0.7}
      />
      <SlidingText
        text="it's"
        offsetX={10}
        offsetY={60}
        size={"80px"}
        color={"#FFFCFF"}
        delay={600}
        ratioX={-1}
        ratioY={1}
      />
      <SlidingText
        text="Fred"
        offsetX={0}
        offsetY={-20}
        size={"170px"}
        color={"#E7BB41"}
        delay={400}
        ratioX={1.5}
        ratioY={-0.6}
      />
    </div>
  )
}

export default Title
"use client"
import { useEffect, useState, useRef } from "react"

function SlidingText({
  text,
  size,
  color,
  delay,
  offsetX = 0,
  offsetY = 0,
  ratioX = 1,
  ratioY = 1
}: {
  text: string
  size: string
  color: string
  delay: number
  offsetX?: number
  offsetY?:number
  ratioX?: number
  ratioY?: number
}) {
  const id: string = `TitleText${text}`
  const [hideLine, setHideLine] = useState(true)
  const [display, setDisplay] = useState(false)
  const [startAnimation, setStartAnimation] = useState(false)
  const [positionX, setPositionX] = useState(offsetX)
  const [positionY, setPositionY] = useState(offsetY)
  const textRef = useRef<HTMLDivElement | null>(null)

  let offX = 0
  let offY = 0

  function updateMousePosition(e:MouseEvent) {
    const textElem = textRef.current!
    let screenWidth = window.innerWidth
    let screenHeigth = window.innerHeight
    let mouseX = e.clientX
    let mouseY = e.clientY

    offX = Math.floor((screenWidth / 2 - mouseX) / 10)
    offY = Math.floor((screenHeigth / 2 - mouseY) / 30)

    if (positionX != (offsetX - offX) || positionY != (offsetY - offY)) {
      setPositionX(offsetX - offX * ratioX)
      setPositionY(offsetY - offY * ratioY)
    }

    // setTimeout(() => textElem.classList.remove("transition-all"), 300)
  }

  // sliding animation on load of element
  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLine(false)
      setTimeout(() => {
        setDisplay(true)
      }, 250)
      setStartAnimation(true)
    }, delay)

    window.addEventListener('mousemove', (e) => updateMousePosition(e));

    const secondTimer = setTimeout(() => {
      setHideLine(true)
    }, delay + 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-screen relative text-center">
      <div
        id={`slider${id}`}
        className={`absolute w-full h-full z-10
        ${startAnimation && "animate-translate-right"}
        ${hideLine && "hidden"}
        `}
        style={{
          backgroundColor: color,
          left: "100%",
          top: `${offsetY - offY}px`,
        }}
      ></div>
      <div
        id={id}
        ref={textRef}
        className="w-full h-min transition-all duration-75"
        style={{
          fontSize: size,
          color: display ? color : "transparent",
          transform: `translate(${positionX}px, ${positionY}px)`,
        }}
      >
        {text}
      </div>
    </div>
  )
}

export default SlidingText

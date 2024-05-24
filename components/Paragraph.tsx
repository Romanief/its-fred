"use client"

import React, {useEffect, useRef, useState} from 'react'

function Paragraph({text} : {text:string}) {
  const [animate, setAnimate] = useState(false)

  const refText = useRef<HTMLDivElement>(null)

  function handleScrool() {
    const textElem = refText.current
    const scrollPosition = window.innerHeight / 2
    const elementTop = textElem?.getBoundingClientRect().top
    if (elementTop && elementTop < scrollPosition) setAnimate(true)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrool)
  }, [])

  return (
    <div className='w-screen flex justify-center sm:gap-16 gap-4 p-5'>
      <div 
      className={`w-1/3 flex justify-end`}>
      </div>
      <div 
      ref={refText} 
      className={` md:text-xl w-2/3 flex flex-col
      ${animate ? "animate-appear-left" : "opacity-0"}`}>
        <div className='md:w-2/3 w-full font-sans text-darkSnow'>{text}</div>
      </div>
    </div>
  )
}

export default Paragraph
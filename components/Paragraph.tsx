"use client"

import React, {useEffect, useRef, useState} from 'react'

function Paragraph({text} : {text:string}) {
  const [animate, setAnimate] = useState(false)

  const refText = useRef<HTMLDivElement>(null)

  function handleScrool() {
    const textElem = refText.current
    const scrollPosition = window.innerHeight / 2
    const elementTop = textElem?.getBoundingClientRect().top
    if (elementTop && elementTop < scrollPosition) {
      setAnimate(true)     
      window.removeEventListener("scroll", handleScrool)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrool)
  }, [])

  return (
    <>
    <div className='w-screen justify-center hidden sm:flex sm:gap-3 md:gap-16 p-10'>
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

    <div className='w-screen sm:hidden p-10'>
      <div 
      className="md:text-xl flex flex-col animate-appear-left">
        <div className='md:w-2/3 w-full font-sans text-darkSnow'>{text}</div>
      </div>
    </div>
    </>
  )
}

export default Paragraph
"use client"

import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'

function Project({text, image, title, mt = 40, link} : {text:string, image?: string, title: string, mt?:number, link?: string}) {
  const [animate, setAnimate] = useState(false)

  const refText = useRef<HTMLDivElement>(null)
  const refImg = useRef<HTMLDivElement>(null)

  function handleScrool() {
    const textElem = refText.current
    const imgElem = refImg.current
    const scrollPosition = window.innerHeight / 2
    const elementTop = textElem?.getBoundingClientRect().top
    if (elementTop && elementTop < scrollPosition) setAnimate(true)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrool)
  }, [])

  return (
    <div className={`w-screen flex justify-center sm:gap-16 gap-4 p-5 mt-${mt}`}>
      <div ref={refImg} className={`w-1/3 flex justify-end ${animate ? "animate-appear-right" : "opacity-0"}`}>
        {image && 
          <div className='border border-snow aspect-square relative'>
            <Image src={image} alt="Project image" fill></Image>
          </div>}
      </div>

      <div 
      ref={refText} 
      className={` md:text-xl w-2/3 flex flex-col
      ${animate ? "animate-appear-left" : "opacity-0"}`}>
        <div className='text-3xl text-saffron'>
          {title}
        </div>
        <div className='md:w-2/3 w-full font-sans text-darkSnow'>
          {text}
        </div>
          {link && 
            <a href={link} className="cursor-pointer text-darkSnow my-3 hover:text-sheenGold font-sans">
              Click here and check it out!
            </a>}
      </div>
    </div>
  )
}

export default Project
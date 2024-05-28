"use client"

import React, {useEffect, useRef, useState} from 'react'
import { FaGitAlt } from "react-icons/fa6";

function Project({
  text, 
  image, 
  title, 
  mt = 40, 
  link,
  git
}: {
  text:string, 
  image?: string, 
  title: string, 
  mt?:number, 
  link?: string,
  git? :string
}) {
  const [animate, setAnimate] = useState(false)

  const refText = useRef<HTMLDivElement>(null)

  function handleScrool() {
    const textElem = refText.current
    const scrollPosition = window.innerHeight / 1.5
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
    <div className={`w-screen sm:flex justify-center sm:gap-16 gap-16 p-10 hidden`} style={{marginTop: `${mt}px`}}>
      <div className={`w-1/3 flex justify-end -translate-x-3 ${animate ? "animate-appear-right" : "opacity-0"}`}>
        {image && <img src={image} alt="Project image" className='aspect-square md:w-2/3 w-3/4 my-1'></img>}
      </div>

      <div 
      ref={refText} 
      className={` md:text-xl w-2/3 flex -ml-8 md:ml-0 flex-col justify-center transition-all
      ${animate ? "animate-appear-left" : "opacity-0"}`}>
        
        <div className='flex gap-6 text-3xl'>     
          <div className='text-3xl text-saffron'>
            {title}
          </div>
            <a className='cursor-pointer h-full text-3xl px-5' href={git}>
              <FaGitAlt className='cursor-pointer'/>
            </a>
          </div>

        <div className='md:w-2/3 w-full font-sans text-darkSnow'>
          {text}
        </div>

          {link && 
            <a href={link} className="cursor-pointer text-darkSnow my-3 hover:text-sheenGold font-sans">
              Click here and check it out!
            </a>
          }

      </div>
    </div>

    <div className={`w-screen flex flex-col gap-5 justify-center sm:hidden p-10`} style={{marginTop: `${mt}px`}}>
      <div 
      className={`w-full flex flex-col justify-center animate-appear-left`}>
        <div className='flex gap-6 text-3xl'>     
          <div className='text-3xl text-saffron'>
            {title}
          </div>
            <a className='cursor-pointer h-full text-3xl px-5' href={git}>
              <FaGitAlt className='cursor-pointer'/>
            </a>
          </div>

        <div className='md:w-2/3 w-full font-sans text-darkSnow'>
          {text}
        </div>

          {
            link && 
            <a href={link} className="cursor-pointer text-darkSnow my-3 hover:text-sheenGold font-sans">
              Click here and check it out!
            </a>
          }
      </div>

      <div className={`w-full animate-appear-right`}>
        {image && <img src={image} alt="Project image" className='aspect-square w-2/3 mx-auto my-1'></img>}
      </div>
    </div>
    </>
  )
}

export default Project
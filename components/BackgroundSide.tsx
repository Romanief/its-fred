"use client"
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";


function BackgroundSide() {
  const sideRef = useRef<HTMLDivElement | null>(null)
  const sideLineRef =  useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const sideElem = sideRef.current!
    const sideLineElem = sideLineRef.current!

    setTimeout(() => {
      sideElem.classList.remove("right-[-500px]")
      sideElem.classList.add("right-10")
    }, 1000)

    setTimeout(() => {
      sideLineElem.classList.remove("bottom-full")
      sideLineElem.classList.add("bottom-0")
    }, 1000)

  }, [])

  return (
    <>
      <div ref={sideLineRef} className="hidden sm:block h-screen fixed left-1/3 bottom-full bg-dimGray w-4 transition-all duration-1000 -z-10"></div>


      <div ref={sideRef} className='fixed top-0 right-[-500px] h-screen flex flex-col justify-center transition-all'>
        <div className="flex p-5 hover:-translate-x-0 translate-x-3/4 transition bg-myBlack  hover:text-sheenGold">
          <FaGithub className="text-3xl"/>
          <p className="ml-14 text-3xl text-inherit cursor-pointer">GitHub</p>
        </div>
        <div className="flex p-5 hover:-translate-x-0 translate-x-3/4 transition bg-myBlack hover:text-sheenGold">
          <FaLinkedin className="text-3xl"/>
          <p className="ml-14 text-3xl text-inherit cursor-pointer">LinkedIn</p>
        </div>
      </div>
    </>
  )
}

export default BackgroundSide
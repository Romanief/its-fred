"use client"
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaRegEnvelopeOpen } from "react-icons/fa6";


function BackgroundSide() {
  const sideRef = useRef<HTMLDivElement | null>(null)
  const sideLineRef =  useRef<HTMLDivElement | null>(null)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text:string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }
  
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


      <div ref={sideRef} className='fixed top-0 right-[-500px] h-screen md:flex hidden flex-col duration-300 justify-center transition-all'>
        <div className="flex p-5 hover:-translate-x-0 translate-x-3/4 transition bg-myBlack  hover:text-sheenGold">
          <FaGithub className="text-3xl"/>
          <a href="https://github.com/Romanief" className="ml-14 text-3xl text-inherit cursor-pointer">got to GitHub</a>
        </div>
        <div className="flex p-5 hover:-translate-x-0 translate-x-3/4 transition bg-myBlack hover:text-sheenGold">
          <FaLinkedin className="text-3xl"/>
          <a href="https://www.linkedin.com/in/federicoromaniello/" className="ml-14 text-3xl text-inherit cursor-pointer">go to LinkedIn</a>
        </div>
        <div className="flex p-5 hover:-translate-x-0 translate-x-3/4 transition bg-myBlack hover:text-sheenGold">
          <FaRegEnvelopeOpen className="text-3xl"/>
          <p 
          onClick={() => copyToClipboard("federicoromaniellowork@outlook.com")} 
          className="ml-14 text-3xl text-inherit cursor-pointer">
            {copied ? "Copied!" : "copy email"}
          </p>
        </div>
      </div>

      <div className='fixed p-5 top-0 left-0 md:hidden justify-around w-full transition-all flex bg-myBlack border-b border-dimGray'>
        <a href="https://github.com/Romanief" className="text-3xl hover:text-sheenGold bg-inherit cursor-pointer">    
          <FaGithub className="text-3xl cursor-pointer"/>
        </a>
        <a href="https://www.linkedin.com/in/federicoromaniello/" className="text-3xl hover:text-sheenGold bg-inherit cursor-pointer">          
          <FaLinkedin className="text-3xl cursor-pointer"/>
        </a>
        <p 
        onClick={() => copyToClipboard("federicoromaniellowork@outlook.com")} 
        className="text-3xl cursor-pointer bg-inherit">
          {copied ? "Copied!" : <FaRegEnvelopeOpen className="text-3xl cursor-pointer"/>}
        </p>
      </div>
    </>
  )
}

export default BackgroundSide
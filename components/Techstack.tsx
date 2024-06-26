import React from 'react'

import { BiLogoTypescript, BiLogoFlask } from "react-icons/bi";
import { FaPython, FaCss3, FaBootstrap, FaReact, FaNodeJs, FaGitAlt} from "react-icons/fa6";
import { SiTailwindcss, SiDjango, SiTensorflow , SiPrisma, SiExpress, SiSqlite, SiSwr} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";


function Techstack() {
  return (
    <div className='w-screen mt-40 relative pb-10 pt-5 bg-myBlack border-y border-dimGray'>
      <div className='text-center w-full text-7xl py-2 mb-3'>
        Techstack
      </div>

      <div className='w-4/5 mx-auto flex flex-wrap justify-around *:basis-1/4 *:my-7 columns-3 text-center text-3xl md:text-5xl'>
        <BiLogoTypescript/>
        <RiNextjsFill/>
        <SiSwr/>
        <SiTensorflow/>
        <FaReact/>
        <FaNodeJs/>
        <SiExpress/>
        <SiPrisma/>
        <FaCss3/>
        <SiTailwindcss/>
        <FaBootstrap/>
        <FaPython/>
        <BiLogoFlask/>
        <SiDjango/>
        <SiSqlite/>
        <FaGitAlt/>
      </div>
    </div>
  )
}

export default Techstack
import React from 'react'

function Footer() {
  return (
    <div className='w-screen h-10 bg-darkDimGray border-y border-dimGray pb-10 p-3 text-xl sm:text-3xl flex'>
      <div className='w-1/2 text-center'>
        Made in <span className='bg-inherit text-saffron'>italy</span>
        , Based in <span className='bg-inherit text-saffron'>london</span>
      </div>

      <div className="flex justify-center lg:ml-20 gap-10 h-10 pb-2 w-1/2">
        <img className='aspect-video h-full' src='/LSBU.jpg'></img>
        <img className='aspect-video h-full' src='nhs.png'></img>
      </div>
    </div>
  )
}

export default Footer
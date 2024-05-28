import React from 'react'

function Funfact({title, texts} : {title: string, texts: string[]}) {
  return (
    <div className="w-screen flex justify-center my-20">
      <div className='sm:w-3/5 sm:border-0 border-b-8 border-darkSnow w-full py-10 px-20 bg-darkSaffron'>
        <div className='text-5xl'>{title}</div>
        {texts.map(text => <div className='font-sans text-darkSnow'>{text}</div>)}
      </div>
    </div>
  )
}

export default Funfact
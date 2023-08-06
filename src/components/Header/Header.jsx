import React from 'react'
import Navbar from '../Nav/Navbar'
import Logo from '/public/1.png'
import '/src/index.css'

const Header = () => {
  return (
    <div className='flex items-center w-full min-h-[20%] pt-10 pb-2'>
        <div className='flex relative min-w-[80%] h-16 mx-auto justify-between items-center rounded-lg shadow-2xl bg-white'>
          <div className='flex items-center gap-2'>
            <img className='h-16' src={Logo} alt="mytinerary_title" />
            <h1 className="title-font text-3xl md:text-4xl">MYTINERARY</h1>
          </div>
          
          <Navbar />
        </div>
    </div>
  )
}

export default Header

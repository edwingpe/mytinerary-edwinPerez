import React from 'react'
import Navbar from '../Nav/Navbar'
import Logo from '/public/1.png'
import '/src/index.css'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 container mx-auto flex items-center w-full min-h-[10%] z-50'>
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

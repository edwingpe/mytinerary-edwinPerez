import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col text-center md:flex-row md:justify-center md: gap-16'>
        <div className='space-y-8 lg:text-left'>
            <span className='font-sans font-extrabold text-6xl md:text-8xl text-gray-700 bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text hover:cursor-pointer'>MYTINERARY</span>
            <p className='text-3xl'>Find your perfect trip, <br />designed by insiders who know <br /> and love their cities!</p>
            <button>
              <Link className='border-2 rounded-lg px-5 py-2 bg-orange-500 border-orange-600 text-center text-white font-bold' to={'/cities'}>
              Discover Us!</Link>
            </button>
        </div>
        <div className='hidden lg:block'>
            <img className= 'max-w-[80%]'src="https://www.pngmart.com/files/15/City-Building-Transparent-PNG.png" alt="" />
        </div>
    </div>
  )
}

export default Hero
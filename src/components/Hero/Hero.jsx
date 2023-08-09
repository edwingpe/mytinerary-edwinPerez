import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col text-center md:flex-row md:justify-around '>
        <div className='space-y-8 md:text-left'>
            <span className='text-6xl font-sans font-extrabold md:text-7xl'>MYTINERARY</span>
            <p className='text-3xl'>Find your perfect trip, <br />designed by insiders who know <br /> and love their cities!</p>
            <button>
              <Link className='border-2 rounded-lg px-5 py-2 bg-orange-500 border-orange-600 text-center text-white font-bold' to={'/cities'}>
              Discover Us!</Link>
            </button>
        </div>
        <div className='hidden md:block'>
            aca fgotos
        </div>
    </div>
  )
}

export default Hero
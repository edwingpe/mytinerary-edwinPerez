import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="container mx-auto flex items-start justify-center">
      <div className='flex flex-col items-center p-5 mb-32 mx-5 gap-10 z-0 mt-32 bg-white/20 backdrop-blur-sm rounded-xl shadow-xl border-4 border-white'>
        <p className='font-sans text-5xl font-bold text-white uppercase'>mytinerary</p>
        <p className='text-2xl text-center text-white'>Find your perfect trip, designed by insiders who know and love their cities!</p>
        <button className='p-5'>
          <Link className='border-2 rounded-lg px-5 py-2 bg-orange-500 border-orange-600 text-center text-white font-bold' to={'/cities'}>
          Travel with Us!</Link>
        </button>
      </div>
    </div>
  )
}

export default Hero
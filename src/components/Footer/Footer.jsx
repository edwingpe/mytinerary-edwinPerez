import React from 'react'
import Navbar from '../Nav/Navbar'

function Footer() {
  return (
    <footer className='flex items-center w-full min-h-[16vh] bg-black'>
      <div className='flex flex-col min-w-[80%] h-full mx-auto justify-between '>
        {/* <a className="text-white text-bold text-xl">MYTINERARY</a> */}
        <a className="text-white text-md" href="">Home</a>
        <a className="text-white text-md"href="">Cities</a>
        <p className='text-center self-end text-white pt-16'>2023 Copyright Edco, Inc.</p>
      </div>    
    </footer>
  )
}


export default Footer
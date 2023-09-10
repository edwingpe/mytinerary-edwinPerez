import React from 'react'
import Hero from '../components/Hero/Hero'
import Carousel from '../components/Carousel/Carousel'


const Home = () => {
  return (
    <div className="grow bg-[url('/1.jpg')] bg-cover bg-center bg-fixed">
      <Hero/>
      <Carousel/>    
    </div>
  )
}

export default Home
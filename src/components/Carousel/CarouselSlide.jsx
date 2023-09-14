import React from 'react'
import { useState, useEffect } from 'react'
import './style.css'

function CarouselSlide({popularCities}) {
    console.log(popularCities)
    const [ currentState, setCurrentState ] = useState(0)
    const [ imagesPerSlide, setImagesPerSlide ] = useState(4)
    
    const nextSlide = () => {
        if ( popularCities.length <= imagesPerSlide) {
            setCurrentState(0)
            setImagesPerSlide(4)
        } else {
            setCurrentState(currentState + 4)
            setImagesPerSlide(imagesPerSlide + 4)
        }
    }

    const prevSlide = () => {
        if ( currentState <= 0) {
            setCurrentState(popularCities.length - 4)
            setImagesPerSlide(popularCities.length)
        } else {
            setCurrentState(currentState - 4)
            setImagesPerSlide(imagesPerSlide - 4)
        }
    }

    useEffect(() => {
        const interval = setInterval(()=>{
            nextSlide();
        }, 3000)
        return () => clearInterval(interval)
    }, [currentState])

  return (
    <div className='bg-white backdrop-blur-sm rounded-xl  shadow-2xl border-4 border-white sm:py-8'>
        <h2 className='font-bold text-3xl text-center pb-6 uppercase'>Favorites Cities</h2>
        <div className='flex flex-wrap justify-center items-center'>
            
            <button className='border-2 border-white/50 shadow-xl p-5 w-16 rounded-full bg-white' onClick={prevSlide}>L</button>
            {
                popularCities.slice(currentState, imagesPerSlide).map((each, index) =>(
                    <div className='flex flex-col'>
                        <img className='sm:w-[200px] sm:h-[200px] rounded-3xl mx-3 shadow-2xl border-4 border-white' src= {each.image} alt={each.id}/>
                        <span className='font-thin text-center text-2xl pt-2'> {each.city}</span>
                    </div>
                ))
            }
            <button className='border-2 border-white/50 shadow-xl p-5 w-16 rounded-full bg-white' onClick={nextSlide}>R</button>
        </div>
    </div>
  )
}

export default CarouselSlide
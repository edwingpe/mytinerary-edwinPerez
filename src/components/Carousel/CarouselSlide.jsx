import React from 'react'
import { useState, useEffect } from 'react'
import './style.css'

function CarouselSlide({popularCities}) {
    console.log(popularCities)
    const [ currentState, setCurrentState ] = useState(0)
    const [ imagesPerSlide, setImagesPerSlide ] = useState(4)
    const [ totalImages, setTotalImages ] = useState(popularCities.length)

    const renderCarousel = () => {
        const slideWidth = 100/imagesPerSlide
        
        return popularCities.map((city, index) => {
            return (
                <img className='' key = {index}  
                    src= {city.image} 
                    alt={city.city}
                    style={{
                        width: `${slideWidth}%`, height:"100%"
                    }} />
            )
        })
    }

    const nextSlide = () => {
        setCurrentState(currentState + 1)
        if (currentState >= totalImages - 1){
            setCurrentState(0)
        }
    }

    const prevSlide = () => {
        setCurrentState(currentState - 1)
        if (currentState <= 0){
            setCurrentState(totalImages - 1)
        }
    }

    useEffect(() => {
       /*  const interval = setInterval(()=>{
            nextSlide();
        }, 3000)
        return () => clearInterval(interval) */
    }, [currentState])


  return (
    <div className='border-2 border-black slider'>CarouselSlide
        <div className='slider-wrapper'
            style={{ transform: `translateX(-${currentState*(100/imagesPerSlide)}%)`}}>
            {renderCarousel()}
            <button className='goLeft' onClick={prevSlide}>IZQ</button>
            <button className='goRight' onClick={nextSlide}>RIGHT</button>
        </div>
    </div>

  )
}

export default CarouselSlide
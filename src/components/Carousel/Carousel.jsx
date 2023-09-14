
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_cities } from '../../store/actions/cityActions';
import CarouselSlide from './CarouselSlide';


function Carousel() {
  const cities = useSelector( (store) => store.cityReducer.cities)
  const dispatch = useDispatch();
  

  useEffect( () => {
    dispatch(get_cities())
  }, [])

  const popularCities = cities.filter(city => city.isPopular)
  
  return (
    <div className="">
        
        <CarouselSlide popularCities={popularCities}/>
        
        
    </div>
  )
}

export default Carousel
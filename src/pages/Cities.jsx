import React, { useEffect, useState } from 'react'
import  Card  from '../components/Card/Card'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { get_cities, filter_cities } from '../store/actions/cityActions'


const Cities = () => {

  const cities = useSelector((store) => store.cityReducer.cities)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_cities())
  }, []);

  const handleInputChange = (event) => {
      dispatch(filter_cities({
        name: event.target.value
      }))
  }

  return (
    <div className='container flex flex-col shrink-0 gap-5 mx-auto py-10'>Find Your City.
        <label htmlFor=""></label>
        <input onChange={handleInputChange} className='border-2 border-gray-700 rounded-md py-1 px-2' type="text"/>
        <div className='flex flex-wrap justify-center gap-5'>
            {
                cities?.length > 0
                ? cities?.map((city) => {
                    return (
                      <Link key = {city._id} to= {`/cities/${city._id}`}>
                          <Card city={city.city} country={city.country} image={city.image} />
                      </Link>
                  )
                })
                : <h2>Hola</h2>
            }
        </div>
    </div>
  )
}

export default Cities
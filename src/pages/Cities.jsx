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
    <div className='container flex flex-col gap-5 mt-20 mx-auto py-10'>
        <h1 className=' font-bold text-3xl text-center uppercase mb-10'>cities</h1>
        <div className='container flex justify-around mx-auto'>
          <label className=' font-thin text-2xl uppercase'>Find your city:</label>
          <input onChange={handleInputChange} className='border-2 border-gray-700 rounded-md py-1 px-2' type="text"/>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5'>
            {
                cities?.length > 0
                ? cities?.map((city) => {
                    return (
                      <Link key = {city._id} to= {`/cities/${city._id}`}>
                          <Card city={city.city} country={city.country} image={city.image} />
                      </Link>
                  )
                })
                : <h2>La busqueda no dio resultados :(</h2>
            }
        </div>
    </div>
  )
}

export default Cities
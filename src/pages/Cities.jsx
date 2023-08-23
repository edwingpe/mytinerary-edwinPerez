import React, { useEffect, useState } from 'react'
import  Card  from '../components/Card/Card'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Cities = () => {
  const [cities, setCities] = useState();

  useEffect(() => {
    axios.get('http://localhost:8000/api/cities?city=')
      .then(response => setCities(response.data.cities))
      .catch(err => console.log(err))
  }, []);

  const handleInputChange = async (event) => {

    try {
      const response = await axios.get(`http://localhost:8000/api/cities?city=${event.target.value}`)
      setCities(response.data.cities)

    } catch (error) {
      console.log(error)

    }

  }

  return (
    <div className='container flex flex-col shrink-0 gap-5 mx-auto py-10'>Find Your City.
        <label htmlFor=""></label>
        <input onChange={handleInputChange} className='border-2 border-gray-700 rounded-md py-1 px-2' type="text"/>
        <div className='flex flex-wrap justify-center gap-5'>
            {
              cities?.map((city) => {
                return (
                  <Link key = {city._id} to= {`/cities/${city._id}`}>
                      <Card city={city.city} country={city.country} image={city.image} />
                  </Link>
                )
              })
            }
        </div>
    </div>
  )
}

export default Cities
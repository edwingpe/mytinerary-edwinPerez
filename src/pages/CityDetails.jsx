import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const CityDetails = () => {
    const [city, setCity] = useState()
    const { id } = useParams();

    useEffect(() => {
      axios.get(`http://localhost:8000/api/cities/${id}`)
      .then(response => {
        console.log(response)
        setCity(response.data.city)
      })
      .catch(error => console.log(error))
    },[])

  return (
    <div className='container flex flex-col justify-center mx-auto'>CityDetails under construction
        {city?.city}
        {city?.country}
        <img className='w-200 h-200' src={`${city?.image}`} alt="" />
    </div>
  )
}

export default CityDetails
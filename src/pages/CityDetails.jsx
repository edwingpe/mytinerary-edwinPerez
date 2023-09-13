import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { get_city_byId } from '../store/actions/cityActions'
import Itineraries from '../components/Itineraries/Itineraries'


const CityDetails = () => {
    const { id } = useParams();
    const city = useSelector((store) => store.cityReducer.city)
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(get_city_byId(id))
    },[])

  return (
    <div className='container flex flex-col justify-center items-center mx-auto mt-32 px-5 gap-3'>
      <div id='title-box' className='flex justify-center gap-3'>
        <h2 className=' font-thin text-4xl uppercase'>{city?.city}</h2>
        <span className='font-bold text-4xl uppercase'>{city?.country}</span>
      </div>
      <img className='border rounded-lg w-200 h-200' src={`${city?.image}`} alt="" />
      <section id='description-box' className=' text-lg normal-case font-light text-justify py-2'>
        {city?.description}
      </section>

      <section id='itineraries-box' className='container'>
        <Itineraries key={ city._id}  cityid = {id}/>
      </section>
    </div>
  )
}

export default CityDetails
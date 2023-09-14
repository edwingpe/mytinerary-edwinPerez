import axios from 'axios'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { create_user } from '../store/actions/userActions'

const SignUp = () => {
  const dispatch = useDispatch()
  const [countries, setContries] = useState([])
  

  const name = useRef(null)
  const lastname = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const image = useRef(null)
  const country = useRef(null)

  useEffect(() => {
    axios(`https://restcountries.com/v3.1/all?fields=name`)
      .then(({ data }) =>
        setContries(data.map((country) => country.name.common))
      )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      name: name.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
      image: image.current.value,
      password: password.current.value,
      country: country.current.value,
    }
    dispatch( create_user(body) )
  }
  return (
    <div className='container mx-auto mt-32'>
      <form onSubmit={ handleSubmit } className='grid grid-cols-1 p-3 mx-3 md:mx-auto border-2 border-black shadow-lg rounded-md lg:w-[50%] gap-3 font-normal'>
        <label className='block'>
          <span>Name</span>
          <input className='block border w-full mt-1' type="text" name='name' ref={name} />
        </label>
        <label className='block'>
          <span>Lastname</span>
          <input className='block border w-full mt-1' type="text" name='lastname' ref={lastname}/>
        </label>
        <label className='block'>
          <span>Profile photo</span>
          <input className='block border w-full mt-1' type="text" name='image'ref={image}/>
        </label>
        <label className='block'>
          <span>Email</span>
          <input className='block border w-full mt-1' type="text" name='nemailame' ref={email}/>
        </label>
        <label className='block'>
          <span>Password</span>
          <input className='block border w-full mt-1' type="password" name='password' ref={password}/>
        </label>
        <label className='block'>
          <span>Country</span>
          <select className='block border w-full mt-1 mb-8' name="countries" ref={country}>
            {countries.length > 0 && countries.map(country => <option key={`opt-country-${country}`} value={country}> {country} </option>)}
          </select>
        </label>

        <button className='px-4 py-2 rounded-lg my-5 bg-slate-500'>signup</button>

      </form>
      <div className='flex flex-col text-center'>
        <span>Do you have an account? Signin</span>
        <span>Sign with Google</span>
      </div>
    </div>
  )
}

export default SignUp
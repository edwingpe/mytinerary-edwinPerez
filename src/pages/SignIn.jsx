import React, { useRef } from 'react'
import { signin_user } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const email = useRef(null)
  const password = useRef(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      email: email.current.value,
      password: password.current.value,
    }
    dispatch( signin_user(body)).then((response) =>{
      if ( response.payload.success) {
        alert('Welcome' + response.payload.user.name)
        navigate('/')
      }
    })
  }
  return (
    <div className='container mx-auto mt-32'>
      <form onSubmit={ handleSubmit } className='grid grid-cols-1 p-3 mx-3 md:mx-auto border-2 border-black shadow-lg rounded-md lg:w-[50%] gap-3 font-normal'>
        <label className='block'>
          <span>Email</span>
          <input className='block border w-full mt-1' type="text" name='email' ref={email}/>
        </label>
        <label className='block'>
          <span>Password</span>
          <input className='block border w-full mt-1' type="text" name='password' ref={password}/>
        </label>
        <button className='px-4 py-2 rounded-lg my-5 bg-orange-300'>signup</button>
      </form>
      <div className='flex flex-col text-center'>
        <span>Do you have an account? Signin</span>
        <span>Sign with Google</span>
      </div>
    </div>
  )
}

export default SignIn
import React from 'react'
import '/src/index.css'

function Login() {
  return (
    <div className='flex items-start border-2 px-2 pt-2'>
      <a className='title-font text-3xl md:text-4xl hover:text-gray-700 hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:cursor-pointer'>Login</a>
      <img className='w-10 'src="/alien_avatar_default.png" alt="user default" />
    </div>
  )
}

export default Login
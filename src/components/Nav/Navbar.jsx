import React from 'react'
import Link from '../Link/Link'
import Login from '../Login/Login'

function Navbar() {
  const links = [
    {title: 'home', to: '/home'},
    {title: 'cities', to: '/cities'},
]
  return (
    <nav className='flex items-center gap-5 px-5'>
      {
        links.map((link) => (<Link key={link.title} title={link.title} to={link.to}/>))
      }
      <Login />
    </nav>
  )
}

export default Navbar
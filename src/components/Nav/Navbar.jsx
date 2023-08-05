import React from 'react'
import Link from '../Link/Link'

function Navbar() {
  const links = [
    {title: 'home', to: '/home'},
    {title: 'cities', to: '/cities'},
]
  return (
    <>
      {
        links.map((link) => (<Link key={link.title} title={link.title} to={link.to}/>))
      }
    </>
  )
}

export default Navbar
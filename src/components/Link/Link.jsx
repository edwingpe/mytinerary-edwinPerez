import React from 'react'
import '/src/index.css'

const Link = ({title, to}) => {
  return (

    <a className='title-font text-3xl md:text-4xl' href={to}>{title}</a>
    
  )
}

export default Link
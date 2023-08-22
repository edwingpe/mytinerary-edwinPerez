import React from 'react'


const Card = ({city, country, image}) => {
  return (
    <div className='min-w-[280px] h-[200px] bg-cover rounded-lg shadow-lg'
    style={{backgroundImage: `url(${image})`}}>
      {city}
      {country}
    </div>
  )
}

export default Card
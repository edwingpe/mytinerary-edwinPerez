import React from 'react'


const Card = ({city, country, image}) => {
  return (
    <div className='min-w-[280px] h-[200px] bg-cover rounded-lg shadow-lg'
    style={{backgroundImage: `url(${image})`}}>
      <div className='flex flex-col px-5 py-2 bg-white/50 rounded-t-lg'>
        <span>{city}</span>
        <span>{country}</span>
      </div>
    </div>
  )
}

export default Card
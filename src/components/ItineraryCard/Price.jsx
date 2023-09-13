import React from 'react'
import { BsCoin } from 'react-icons/bs'

export const Price = ({price}) => {
    console.log(price);
    const ratingPrice = Array.from({length:5},(elem, index) => {
        return (
            <div key={index}>
                {
                    price >= index + 1 ? (<BsCoin className='icon'/>)
                    : null
                }
            </div>
        )
    })
    return (
      <div className='flex gap-1'>
        {ratingPrice}
      </div>  
    )
}

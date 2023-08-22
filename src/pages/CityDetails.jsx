import { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const CityDetails = () => {
    const { id } = useParams();

    useEffect(() => {

    })

  return (
    <div>CityDetails
        {id}
    </div>
  )
}

export default CityDetails
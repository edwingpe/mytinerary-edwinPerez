import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { get_itineraries } from "../../store/actions/itineraryActions"
import ItineraryCard from "../ItineraryCard/ItineraryCard"

const Itineraries = ({cityid}) => {
    const dispatch = useDispatch()
    const itinerariesStore = useSelector(store => store.itineraries.itineraries)
    console.log(itinerariesStore)
    
    useEffect( () =>{
      dispatch(get_itineraries(cityid))
    }, [] )
    return (
      <div>
        { 
          itinerariesStore?.length > 0
          ? itinerariesStore.map((itinerary) => (
              <ItineraryCard itinerary={ itinerary }/>
            ))
          : 
            <h2>no itineraries yet</h2>  
      } 
      
      </div>

    )
}

export default Itineraries
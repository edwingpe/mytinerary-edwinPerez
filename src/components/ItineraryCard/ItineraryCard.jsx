
const ItineraryCard = ({itinerary}) => {
  return (
    <div>
        <h2> {itinerary.name} </h2>
        <p> {itinerary.city.city} </p>
        <p> {itinerary.hashtag} </p>
        <p> {itinerary.user.name} </p>
    </div>
  )
}

export default ItineraryCard
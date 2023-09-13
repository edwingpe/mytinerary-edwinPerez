import { Price } from "./Price"

const ItineraryCard = ({ itinerary }) => {
  const hashtagArray = (itinerary.hashtags)

  return (
    <div className="flex border-2 border-black rounded-xl max-w-3xl mx-auto my-6 shadow-lg">
      <div id='aside-card' className="flex flex-col px-3 py-5 rounded-l-xl gap-2 bg-gray-700/10">
        <img className='w-20 h-20 rounded-full' src={`${itinerary.user.image}`} alt="profile_photo" />
        <p className="text-center font-thin text-3xl capitalize"> {itinerary.user.name} </p>
      </div>
      <div className="flex flex-col grow">
        <h2 className="text-center font-bold text-2xl my-2 uppercase"> {itinerary.name}</h2>
        <div className="flex items-center justify-around grow">
          <Price price={itinerary.price}/>
          <p className=" font-semibold text-xl"> {itinerary.duration} hours </p>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="flex grow gap-2 px-2 justify-around">
            {
              hashtagArray.map((hashtag) => (
                <p className="font-thin text-lg sm:text-xl">#{hashtag}</p>
              ))
            }
          </div>
          <button className=" bg-green-700 text-white font-bold sm:px-8 sm:py-1 sm:rounded-br-xl sm:rounded-tl-xl rounded-br-xl">more</button>
        </div>
      </div>
    </div>
  )
}

export default ItineraryCard
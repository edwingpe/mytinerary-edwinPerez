import { createReducer } from "@reduxjs/toolkit";
import { get_itineraries, get_itineraries_by_city } from "../actions/itineraryActions";

const initialState = {
    itineraries: [],
    /* itinerary:[] */
}

const itineraryReducer = createReducer( initialState, (builder) => builder
    .addCase(get_itineraries.fulfilled, (state, action) => {
        return {
            ...state,
            itineraries: action.payload.itineraries
        }
    })
    /* .addCase(get_itineraries_by_city.fulfilled,(state, action) => {
        return {
            ...state,
            itinerary: action.payload
            
        }
    }) */

)

export default itineraryReducer
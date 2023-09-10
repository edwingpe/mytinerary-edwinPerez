import { createReducer } from "@reduxjs/toolkit";
import { filter_cities, get_cities, get_city_byId } from "../actions/cityActions";

const initialState = {
    cities: [],
    city: {}
}

const cityReducer = createReducer(initialState,
     (builder) => builder 
        .addCase(get_cities.fulfilled, (state, action) => {

            return {
                ...state,
                cities: action.payload.cities
            }
        })
        .addCase(filter_cities.fulfilled, (state, action) => {

            return{
                ...state,
                cities: action.payload.cities
            }
        })
        .addCase(get_city_byId.fulfilled, (state, action) =>{

            return{
                ...state,
                city: action.payload.city
            }

        })
)

export default cityReducer;
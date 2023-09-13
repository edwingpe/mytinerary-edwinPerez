import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_itineraries = createAsyncThunk('get_itineraries', async (id) =>{
    try{
        const response = await axios.get(`http://localhost:8000/api/itineraries?cityid=${id}`)
        return {
            itineraries: response.data.itineraries
        }
    } catch (error){
        console.log(error)
    }
})

export const get_itineraries_by_city = createAsyncThunk('get_itineraries_by_city',async (obj) =>{
    try {
        const response = await axios.get(`http://localhost:8000/api/itineraries?cityid=${obj}`)
        return{
            itinerary: response.data
        }
    } catch (error){
        console.log(error);
    }
})
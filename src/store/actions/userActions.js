import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_users = createAsyncThunk('get_users', async(id) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/users?userid=`)
        return {
            user: response.data.users
        }
    } catch(error){
        console.log(error);
    }
})


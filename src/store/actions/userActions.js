import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
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

export const create_user = createAsyncThunk('create_user', async (body) => {
    try {
        const response = await axios.post( `http://localhost:8000/api/auth/signup`, body )
        localStorage.setItem( 'token', response.data.token ) 
        return response.data.user
    } catch (error) {
        console.log(error)
        

    }
})

export const signin_user = createAsyncThunk('signin_user', async (body) => {
    try {
        const response = await axios.post( `http://localhost:8000/api/auth/signin`, body )
        localStorage.setItem( 'token', response.data.token ) 
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const signin_token = createAsyncThunk('signin_token', async () => {
    try {
        const token = localStorage.getItem( 'token' ) 
        const response = await axios.post( 'http://localhost:8000/api/auth/signin/token',{},{
            headers: {
                Authorization : `Bearer ${token}`
            }
        } )
        return {
            user : response.data.user,
            token : token
        }
    } catch (error) {
        console.log(error)
    }
})

export const logout = createAction('reset', () => {
    localStorage.removeItem('token')
    return {
        payload: null
    }

})



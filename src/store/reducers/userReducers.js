import { createReducer } from "@reduxjs/toolkit";
import { create_user, get_users, signin_user, signin_token, logout } from "../actions/userActions";

const initialState = {
    user: null,
    token: null
}

const userReducer = createReducer( initialState, (builder) => builder
    .addCase(get_users.fulfilled,(state, action) => {
        return {
            ...state,
            user: action.payload.user
        }
    })
    .addCase( create_user.fulfilled, (state, action ) => {
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token

        }
    })
    .addCase( signin_user.fulfilled, ( state, action ) => {
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token
        }
    })
    .addCase( signin_token.fulfilled, (state, action ) => {
        return {
            ...state,
            user : action.payload.user,
            token : action.payload.token 
        }
    })
    .addCase( logout, (state, action) => {
        return {
            ...state,
            user : null,
            token : null
        }
    })

)
    

export default userReducer
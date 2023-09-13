import { createReducer } from "@reduxjs/toolkit";
import { get_users } from "../actions/userActions";

const initialState = {
    user: []
}

const userReducer = createReducer( initialState, (builder) => builder
    .addCase(get_users.fulfilled,(state, action) => {
        return {
            ...state,
            user: action.payload.user
        }
    })
)

export default userReducer
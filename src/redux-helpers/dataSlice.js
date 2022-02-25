import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'user', initialState: {
        data: null
    }, reducers: {
        setUsersData: (state, action) => {
            state.data = action.payload;
        },
        clearData: (state) => {
            state.data = null;
        }
    }
})

export const { setUsersData, clearData } = dataSlice.actions

export const getUserData = (state) => state.data.data

export default dataSlice.reducer
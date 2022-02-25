import { configureStore } from "@reduxjs/toolkit";
import userReducer from './redux-helpers/userSlice'
import dataReducer from './redux-helpers/dataSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        data: dataReducer
    }
})
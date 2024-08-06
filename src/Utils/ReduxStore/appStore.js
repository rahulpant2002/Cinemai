import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import smartSearchSlice from "./smartSearchSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        smartSearch : smartSearchSlice,
    }
})
export default appStore;
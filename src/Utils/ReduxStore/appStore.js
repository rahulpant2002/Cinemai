import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import smartSearchReducer from "./smartSearchSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        smartSearch : smartSearchReducer,
        config : configReducer
    }
})
export default appStore;
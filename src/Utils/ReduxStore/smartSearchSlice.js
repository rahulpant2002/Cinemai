import { createSlice } from "@reduxjs/toolkit";

const smartSearchSlice = createSlice({
    name : "smartSearch",
    initialState : {
        isSmartSearch : false,
        smartSearchMoviesResult : null,
        isSpecificMovie : false
    },
    reducers : {
        toggleSmartSearch : (state)=>{
            state.isSmartSearch = !state.isSmartSearch;
        },
        addSmartSearchMovies : (state, action)=>{
            state.smartSearchMoviesResult = action.payload;
        },
        addSpecificMovie : (state)=>{
            state.isSpecificMovie = true;
        },
        removeSpecificMovie : (state)=>{
            state.isSpecificMovie = false;
        }
    }
})
export const {toggleSmartSearch, addSmartSearchMovies, addSpecificMovie, removeSpecificMovie} = smartSearchSlice.actions;
export default smartSearchSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const smartSearchSlice = createSlice({
    name : "smartSearch",
    initialState : {
        isSmartSearch : false
    },
    reducers : {
        toggleSmartSearch : (state)=>{
            state.isSmartSearch = !state.isSmartSearch;
        }
    }
})
export const {toggleSmartSearch} = smartSearchSlice.actions;
export default smartSearchSlice.reducer;
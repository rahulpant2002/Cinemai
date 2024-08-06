import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : "config",
    initialState : {
        lang : "en"
    },
    reducers : {
        chooseLang : (state, action)=>{
            state.lang =  action.payload;
        }
    }
})
export const {chooseLang} = configSlice.actions;
export default configSlice.reducer;
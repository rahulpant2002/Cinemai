import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        bollywoodMovies : null,
        upcomingMovies : null,
        evergreenMovies : null
    },
    reducers : {
        addNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state, action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addBollywoodMovies : (state, action)=>{
            state.bollywoodMovies = action.payload;
        },
        addUpcomingMovies  : (state, action)=>{
            state.upcomingMovies = action.payload;
        },
        addEvergreenMovies : (state, action)=>{
            state.evergreenMovies = action.payload;
        }
    }
})
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addBollywoodMovies, addUpcomingMovies, addEvergreenMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
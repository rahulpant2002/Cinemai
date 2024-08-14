import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : {},
        popularMovies : null,
        topRatedMovies : null,
        bollywoodMovies : null,
        upcomingMovies : null,
        bollywood2023 : null,
        showTrailer : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },

        addTrailerVideo : (state, action)=>{
            const {movieId, trailer} = action.payload;
            state.trailerVideo[movieId] = trailer;
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
        addBollywood2023 : (state, action)=>{
            state.bollywood2023 = action.payload;
        },
        watchTrailer : (state, action)=>{
            state.showTrailer = action.payload;
        },
        offTrailer : (state)=>{
            state.showTrailer = null;
        }
    }
})
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addBollywoodMovies, addUpcomingMovies, addBollywood2023, watchTrailer, offTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;
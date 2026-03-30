import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState :{
        nowPlayingMovies: null,
        movieTrailor:null,
        popularMovies: null,
        topRatedMovies: null,
    },
    reducers:{
        addNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;

        },
        addMovieTrailor: (state, action)=>{
            state.movieTrailor = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload;  
        }

    }
})

export const {addNowPlayingMovies , addMovieTrailor,addPopularMovies,addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const watchingMovieSlice = createSlice({
    name:"watchingMovie",
    initialState: [],
    reducers:{
        addWatchingMovie:(state,action)=>{
            return action.payload;
        },
        removeWatchingMovie:(state,action)=>{
            return action.payload;
        }
}
})

export const {addWatchingMovie, removeWatchingMovie} = watchingMovieSlice.actions;
export default watchingMovieSlice.reducer
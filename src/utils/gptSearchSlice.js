import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
    name: "gptSearch",
    initialState:{
        gptSearchContainer : false,
        gptSuggestedMovies: null,
    },
    reducers:{
        ToggleGptSearch: (state, action)=>{
            state.gptSearchContainer = !state.gptSearchContainer;
        },
        setGptSuggestedMovies: (state, action)=>{
            state.gptSuggestedMovies = action.payload;
        }
    }
})

export const {ToggleGptSearch, setGptSuggestedMovies} = gptSearch.actions;
export default gptSearch.reducer;
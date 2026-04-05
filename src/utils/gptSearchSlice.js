import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
    name: "gptSearch",
    initialState:{
        gptSearchContainer : false,
        gptSearchInput: "",
        gptSuggestedMovies: null,
    },
    reducers:{
        ToggleGptSearch: (state, action)=>{
            state.gptSearchContainer = !state.gptSearchContainer;
        },
        setGptSearchInput: (state, action)=>{
            state.gptSearchInput = action.payload;
        },
        setGptSuggestedMovies: (state, action)=>{
            state.gptSuggestedMovies = action.payload;
        }
    }
})

export const {ToggleGptSearch, setGptSuggestedMovies, setGptSearchInput} = gptSearch.actions;
export default gptSearch.reducer;
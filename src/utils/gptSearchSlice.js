import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
    name: "gptSearch",
    initialState:{
        gptSearchContainer : false,
    },
    reducers:{
        ToggleGptSearch: (state, action)=>{
            state.gptSearchContainer = !state.gptSearchContainer;
        }
    }
})

export const {ToggleGptSearch} = gptSearch.actions;
export default gptSearch.reducer;
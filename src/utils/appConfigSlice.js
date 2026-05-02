import { createSlice } from "@reduxjs/toolkit";
const savedLang = localStorage.getItem("lang");
const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: savedLang ||"en",
    },
    reducers:{
        changeLanguage: (state, action)=>{
            state.lang = action.payload
        }
    }
})

export const {changeLanguage}  = configSlice.actions;
export default configSlice.reducer;
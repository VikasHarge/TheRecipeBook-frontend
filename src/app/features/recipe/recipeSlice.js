import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    loading : false,
    recipies : [],
    error : null
}


//Fetch Random Recipies (popular)
export const fetchRandomRecipes = createAsyncThunk('recipies/random', async (max)=>{
    const {data} = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=7f634ede2bf84a7680982e39aba642c2&number=9`,
        {
            headers : {
            "Content-Type" : "application/json"
        }
        }
    )
    return data.recipes
} )

const recipesSlice = createSlice({
    name : 'recipies',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchRandomRecipes.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchRandomRecipes.fulfilled, (state, action)=>{
            state.loading = false;
            state.recipies = action.payload;
            state.error = null;
        })
        builder.addCase(fetchRandomRecipes.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
    }
})

export default recipesSlice.reducer;


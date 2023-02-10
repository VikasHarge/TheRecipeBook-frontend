import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    loading : false,
    recipieDetail : null,
    error : null
}


//Fetch Random Recipies (popular)
export const fetchRecipeDetail = createAsyncThunk('recipies/Detail', async (recipeId)=>{
    const {data} = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=7f634ede2bf84a7680982e39aba642c2`,
        {
            headers : {
            "Content-Type" : "application/json"
        }
        }
    )
    return data
} )

const recipesDetailSlice = createSlice({
    name : 'recipiesDetail',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchRecipeDetail.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchRecipeDetail.fulfilled, (state, action)=>{
            state.loading = false;
            state.recipieDetail = action.payload;
            state.error = null;
        })
        builder.addCase(fetchRecipeDetail.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
    }
})

export default recipesDetailSlice.reducer;


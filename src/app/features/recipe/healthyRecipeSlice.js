import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    loading : false,
    healthyRecipes : [],
    error : null
}


//Fetch Random Recipies (popular)
export const fetchHealthyRecipes = createAsyncThunk('recipies/healthyRecipes', async ()=>{
    const {data} = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=fa53cfdac22f44cea75cba9c9d072897&number=9&diet=vegetarian`,
        {
            headers : {
            "Content-Type" : "application/json"
        }
        }
    )
    console.log(data);
    return data.recipes

} )

const healthyRecipesSlice = createSlice({
    name : 'healthyRecipes',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchHealthyRecipes.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchHealthyRecipes.fulfilled, (state, action)=>{
            state.loading = false;
            state.healthyRecipes = action.payload;
            state.error = null;
        })
        builder.addCase(fetchHealthyRecipes.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
    }
})

export default healthyRecipesSlice.reducer;


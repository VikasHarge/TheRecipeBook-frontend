import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    loading : false,
    searchedRecipes : [],
    error : null
}


//Fetch recipes by cuisine
export const fetchRecipesByCuisine = createAsyncThunk('recipies/cuisine', async (cuisineType)=>{
    const {data} = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=e39fdebb135c4638956f099006153078&number=9&cuisine=${cuisineType}`,
        {
            headers : {
            "Content-Type" : "application/json"
        }
        }
    )
    console.log(data);
    return data.results
} )

//Fetch recipes by Name
export const fetchRecipesByName = createAsyncThunk('recipies/name', async (name)=>{
    const {data} = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=e39fdebb135c4638956f099006153078&number=9&query=${name}`,
        {
            headers : {
            "Content-Type" : "application/json"
        }
        }
    )
    console.log(data);
    return data.results
} )


//Fetch recipes by Ingridient
export const fetchRecipesByIngredients = createAsyncThunk('recipies/ingredients', async (ingridients)=>{
    const {data} = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=e39fdebb135c4638956f099006153078&number=9&ingredients=${ingridients}`,
        {
            headers : {
            "Content-Type" : "application/json"
        }
        }
    )
    console.log(data);
    return data.results
} )



const recipeSearchSlice = createSlice({
    name : 'recipies',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchRecipesByCuisine.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchRecipesByCuisine.fulfilled, (state, action)=>{
            state.loading = false;
            state.searchedRecipes = action.payload;
            state.error = null;
        })
        builder.addCase(fetchRecipesByCuisine.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
        builder.addCase(fetchRecipesByName.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchRecipesByName.fulfilled, (state, action)=>{
            state.loading = false;
            state.searchedRecipes = action.payload;
            state.error = null;
        })
        builder.addCase(fetchRecipesByName.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
        builder.addCase(fetchRecipesByIngredients.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchRecipesByIngredients.fulfilled, (state, action)=>{
            state.loading = false;
            state.searchedRecipes = action.payload;
            state.error = null;
        })
        builder.addCase(fetchRecipesByIngredients.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
    }
})

export default recipeSearchSlice.reducer;


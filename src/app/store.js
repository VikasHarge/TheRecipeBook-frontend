import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./features/recipe/recipeSlice";
import healthyRecipeReducer from './features/recipe/healthyRecipeSlice'
import recipesDetailReducer from './features/recipe/recipeDetailSlice'
import recipeSearchReducer from './features/recipe/recipeSearchSlice'






const reducer = combineReducers({
    randomRecipesData : recipeReducer,
    healthyRecipesData : healthyRecipeReducer,
    recipesDetailsData : recipesDetailReducer,
    searchedRecipesData : recipeSearchReducer
})


//Export Default Store
const store = configureStore({
    reducer : reducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;
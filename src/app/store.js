import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./features/recipe/recipeSlice";
import healthyRecipeReducer from './features/recipe/healthyRecipeSlice'






const reducer = combineReducers({
    randomRecipesData : recipeReducer,
    healthyRecipesData : healthyRecipeReducer,
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
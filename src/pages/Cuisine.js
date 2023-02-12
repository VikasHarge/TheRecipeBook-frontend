import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { fetchRecipesByCuisine } from '../app/features/recipe/recipeSearchSlice'
import RecipeCart from '../components/RecipeCart'
import Loader from '../utils/Loader'
import { CartContainer, ErrorMsgContainer, SpacerContainer, StyledContainer } from '../utils/StyledContainer'

const Cuisine = () => {
    const {cuisineType} = useParams()
    const dispatch = useDispatch();

    const {loading, error, searchedRecipes} = useSelector((state)=>state.searchedRecipesData)

    useEffect(()=>{
        dispatch(fetchRecipesByCuisine(cuisineType));
    },[cuisineType])

    useEffect(()=>{
        if(searchedRecipes.length < 1){
            {toast.error("No Recipe Found")}
        }
    },[searchedRecipes])



  return (
    <>
    {
        loading ? <Loader/> : <>
        <StyledContainer>
            <h1>{cuisineType} Recipes</h1>
            <CartContainer>
              {searchedRecipes.length > 0 ?
                searchedRecipes.map((data, index) => (
                  <RecipeCart key={data.id} data={data} />
                )) : <ErrorMsgContainer>
                    <h1>No Recipe Found</h1>
                </ErrorMsgContainer>
            }
            </CartContainer>
        </StyledContainer>
        <SpacerContainer height='3rem' >
        </SpacerContainer>
        </>
    }
    </>
  )
}

export default Cuisine
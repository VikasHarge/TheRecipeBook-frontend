import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchRecipesByCuisine } from '../app/features/recipe/recipeSearchSlice'
import RecipeCart from '../components/RecipeCart'
import Loader from '../utils/Loader'
import { CartContainer, SpacerContainer, StyledContainer } from '../utils/StyledContainer'

const Cuisine = () => {
    const {cuisineType} = useParams()
    const dispatch = useDispatch();

    const {loading, error, searchedRecipes} = useSelector((state)=>state.searchedRecipesData)

    useEffect(()=>{
        dispatch(fetchRecipesByCuisine(cuisineType));
    },[cuisineType])

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
                )) : <h1>No Recipe Found</h1>
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
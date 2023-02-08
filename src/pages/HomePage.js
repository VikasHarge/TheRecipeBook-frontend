import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchHealthyRecipes } from "../app/features/recipe/healthyRecipeSlice";
import { fetchRandomRecipes } from "../app/features/recipe/recipeSlice";

import RecipeCart from "../components/RecipeCart";
import Loader from "../utils/Loader";
import {
  StyledContainer,
  CartContainer,
  SpacerContainer,
} from "../utils/StyledContainer";

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, error, recipies } = useSelector(
    (state) => state.randomRecipesData
  );

  const { healthyRecipes } = useSelector((state) => state.healthyRecipesData);

  useEffect(() => {
    dispatch(fetchRandomRecipes())
    dispatch(fetchHealthyRecipes())
  }, [dispatch]);


  useEffect(()=>{
    localStorage.setItem('recipe', JSON.stringify(recipies))
  },[recipies])




  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <StyledContainer>
            <h1>Trending Recipes</h1>
            <CartContainer>
              {recipies &&
                recipies.map((data, index) => (
                  <RecipeCart key={data.id} data={data} />
                ))}
            </CartContainer>
          </StyledContainer>

          <SpacerContainer height="4rem"></SpacerContainer>

          <StyledContainer>
            <h1>Healthy Recipes</h1>
            <CartContainer>
              {healthyRecipes &&
                healthyRecipes.map((data, index) => (
                  <RecipeCart key={data.id} data={data} />
                ))}
            </CartContainer>
          </StyledContainer>

          <SpacerContainer height="4rem"></SpacerContainer>
        </>
      )}
    </>
  );
};

export default HomePage;

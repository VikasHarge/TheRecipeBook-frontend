import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRecipeDetail } from "../app/features/recipe/recipeDetailSlice";
import Loader from "../utils/Loader";
import { SpacerContainer, StyledContainer } from "../utils/StyledContainer";
import DetailCart from "../components/DetailCart";

const RecipeDetail = () => {
  const { recipeId } = useParams();

  const dispatch = useDispatch();
  const { loading, error, recipieDetail } = useSelector(
    (state) => state.recipesDetailsData
  );



  useEffect(() => {
    dispatch(fetchRecipeDetail(recipeId));
  }, [dispatch]);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <StyledContainer>
            {recipieDetail && (
                <DetailCart recipieDetail={recipieDetail}/>
            )}
          </StyledContainer>

          <SpacerContainer height="3rem"></SpacerContainer>
        </>
      )}
    </>
  );
};



export default RecipeDetail;

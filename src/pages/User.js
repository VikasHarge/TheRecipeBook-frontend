import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { ErrorMsgContainer, SpacerContainer, StyledBtn, StyledContainer } from "../utils/StyledContainer";

const User = () => {

    const {isAuthenticated , userData} = useSelector((state)=>state.user)
    const navigate = useNavigate()



    useEffect(()=>{
        if(!isAuthenticated){
            navigate('/');
        }
    },[isAuthenticated])

    useEffect(()=>{
        console.log(userData);
    },[userData])

  return <>

  <>
{
    userData && <>  <StyledContainer color="#ffff"  >
    <SpacerContainer height='17vh' >
    </SpacerContainer>
    <UserDetailContainer>
        <UserDetails>
            <h1>User Details</h1>
            <div className="userDetailsDiv" >
                <div className="userDetail_wrapper" ><h2>Name :-</h2>
                <h3>{userData.user.name}</h3></div>

                <div className="userDetail_wrapper" >
                <h2>Email :-</h2>
                <h3>{userData.user.email}</h3>

                </div>

                <div className="userDetail_wrapper">
                <h2>User Since :-</h2>
                <h3>{new Date(userData.user.createdAt).toLocaleDateString()}</h3>
                </div>
            </div>
        </UserDetails>
        <SavedRecipes>
            <h1>Saved Recipes</h1>
            <div className="savedRecipe_wrapper" >
                {
                    userData.user.savedRecipes.length > 0 ? 
                    <>
                    {
                     userData.user.savedRecipes.map((recipe, index)=>{
                        return <div key={recipe._id}  className="savedRecipe_cart" >
                            <img src={recipe.image} alt="recipe/img" />
                            <h4>{recipe.title}</h4>
                            <StyledBtn onClick={()=>navigate(`/recipe/${recipe.recipeId}`)} >
                                View Details
                            </StyledBtn>
                        </div>
                     })
                    }
                    </> : <>
                    <ErrorMsgContainer>
                        <h1>No Saved Recipes</h1>
                    </ErrorMsgContainer>
                    </>
                    

                }

            </div>

        </SavedRecipes>
    </UserDetailContainer>
    <SpacerContainer height="20vh" >

    </SpacerContainer>
  </StyledContainer></>
}
  </>

  </>;
};



const UserDetailContainer = styled.div`
width : 100%;
height : 70vh;
background-color : #EAEAEA;
border-radius : 1rem;
display : grid;
grid-template-columns : 1fr 1fr;
padding : 1rem;
.userDetail_wrapper {
    display : flex;
    margin-bottom : 1rem
    
};
h1 {
    font-size : 1.5rem;
    padding : 2px 6px;
    border-left : 4px solid gray;
}
h2 {
    font-size : 1.3rem;
    padding : 2px 6px;
    border-left : 4px solid gray;
}
h3{
    font-size : 1.3rem;
    padding : 2px 12px;
    border-radius : 6px;
    background-color : #fff;
}
`
const UserDetails = styled.div`
    
    .userDetailsDiv{
        margin-left : 1rem;
        padding : 1rem;
    }

`
const SavedRecipes = styled.div`
    img {
        width : 50px;
        height : 50px;
        background-color : black;
    }
    .savedRecipe_wrapper{
        margin-left : 1rem;
        padding : 1rem;
        display : flex;
        flex-wrap : wrap;
        gap : 1rem;
    }
    .savedRecipe_cart{
        padding : 0.5rem;
        border-radius : 0.5rem;
        width : fit-content;
        height : fit-content;
        background-color : #fff;
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items :center;
    }
`


export default User;

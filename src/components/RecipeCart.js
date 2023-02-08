import React from 'react'
import styled from 'styled-components'
import {BiTimeFive} from 'react-icons/bi'
import { StyledBtn } from '../utils/StyledContainer'
import { Link, useNavigate } from 'react-router-dom'

const RecipeCart = ({data}) => {

    const navigate = useNavigate()



  return (
    <CratRecipe key={data.id} > 
    <img src={data.image} />
        <h2 className='cart_title' >{data.title}</h2>

        <div className='cart_summary' >
            <p dangerouslySetInnerHTML={{__html : data.summary}} ></p>
        </div>

        <div className='cart_info_container' >

            <div>
            {
                data.vegan ? <div className='veg' >
                
                </div> : <div className='non-veg' >
                
                </div>
            }
            <div>
                <BiTimeFive/> 
                <span> {data.readyInMinutes}Min</span>
            </div>
            </div>

            <StyledBtn
                fontSize="0.8rem"
                backgroundColor="#00ABB3"
                onClick={()=>navigate(`/recipe/${data.id}`)}
            >
                View details
            </StyledBtn>
        </div>


        
    </CratRecipe>
  )
}


export const CratRecipe = styled.div`
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    width : max-content;
    height : 409px;
    background-color : #e6e6e6;
    border-radius : 1rem;
    padding : 0.5rem;
    word-wrap:break-word;
    .cart_title {
        width : 350px;
        font-size : 1rem;
        padding :6px;
        word-wrap:break-word !important ;
        margin-top : 6px;
        border-radius : 6px;
        background-color : #cacdcd;
    };
    img {
        width : 350px;
        border-radius : 1rem;
    }
    .cart_info_container{
        padding : 6px;
        width : 100%;
        display : flex;
        flex-direction : row;
        justify-content : space-between ;
        gap : 0.5rem; 
    }
    .cart_info_container div {
        display : flex;
        gap : 6px;
    }
    svg {
            font-size : 1.5rem;
            margin : 0;
            padding : 0;
        }
    .veg{
        margin : 6px;
        width : 1rem;
        height : 1rem;
        background-color : green;
        border-radius:1rem
    }
    .non-veg{
        margin : 6px;
        width : 1rem;
        height : 1rem;
        background-color : red;
        border-radius:1rem
    }

    .cart_summary{
        width : 350px;
        height : auto;
        overflow: hidden;
        /* word-wrap : break-word; */
        /* text-overflow: ellipsis; */
        font-size : 0.8rem;
        padding : 6px;
    }

`

export default RecipeCart
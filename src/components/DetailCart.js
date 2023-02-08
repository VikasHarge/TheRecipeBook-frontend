import React from 'react'
import styled from "styled-components";
import { BiTimeFive } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import {MdOutlineHealthAndSafety} from 'react-icons/md'

const DetailCart = ({recipieDetail}) => {
  return (
    <DetailContainer>
                <div className="image_div">
                  <h1>{recipieDetail.title}</h1>

                  <img src={recipieDetail.image} alt="img" />

                  <div className="info_dash">
                    <div className="info_container">
                      {recipieDetail.vegan ? (
                        <div className="veg"></div>
                      ) : (
                        <div className="non-veg"></div>
                      )}
                      <h2>{recipieDetail.vegan ? 'Veg' : "Non-Veg"}</h2>
                    </div>

                    <div className="info_container">
                      <BiTimeFive />
                      <h2>{recipieDetail.readyInMinutes} Min</h2>
                    </div>

                    <div className="info_container">
                      <IoIosPeople />
                      <h2>{recipieDetail.servings} Servings</h2>
                    </div>

                    <div className="info_container">
                      <MdOutlineHealthAndSafety />
                      <h2>{recipieDetail.healthScore} Health Score</h2>
                    </div>
                  </div>
                </div>

                <div className="ingredient_div">
                    <h1>Ingredient's</h1>
                    
                    <ul  className="ingridient_list" >
                        {
                                recipieDetail.extendedIngredients.map((item, index)=>(
                                <li key={item.id} >{item.original}</li>
                            ))
                        }
                    </ul>
                    <h1>Summary</h1>
                <p className="summary_wrapper"  dangerouslySetInnerHTML={{__html : recipieDetail.summary}} ></p>
                </div>
                
                <div className="instructions_div">
                <h1>Instruction's</h1>
                <p className="instruction_wrapper" dangerouslySetInnerHTML={{__html : recipieDetail.instructions}} ></p>
                </div>
              </DetailContainer>
  )
}

const DetailContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #e6e6e6;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  div {
    height: 100%;
    padding: 0.6rem;
    h1 {
      font-size: 1.2rem;
      margin-top: 12px;
      padding-left: 1rem;
      border-left: 6px solid gray;
    }
  }


    img {
      max-width: 100%;
      border-radius: 1rem;
    }
  

  .ingredient_div {
    border-left: 1px dashed gray;
    border-right: 1px dashed gray;
  }
  .veg {

    width: 1rem;
    height: 1rem;
    background-color: green;
    border-radius: 1rem;
  }
  .non-veg {

    width: 1rem;
    height: 1rem;
    background-color: red;
    border-radius: 1rem;
  }

  .info_dash {
    margin-top: 0.5rem;
    width: 100%;
    height: 5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .info_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 0.8rem;
    }
  }

  svg {
    font-size: 1.5rem;
    margin: 0;
  }

  .summary_wrapper {
    width : 100%;
    font-size : 0.8rem;
    text-align : justify;
    padding : 0.5rem;
  }

  .instruction_wrapper{
    text-align : justify;
    padding : 0.5rem;
    width : 90%;
    font-size : 0.8rem;
    margin-left : 1.5rem;
  }

  .ingridient_list{
    font-size : 0.9rem;
    width : 95%;
    margin-left : 1.5rem;
  }
`;

export default DetailCart
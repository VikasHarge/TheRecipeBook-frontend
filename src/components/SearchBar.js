import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components'
import { StyledBtn, StyledContainer } from '../utils/StyledContainer'

const SearchBar = () => {

    const [searchBy, setSearchBy] = useState(null);
    const [searchKey, setSearchKey] = useState('');

    const navigate = useNavigate()
    

    const radioChangeHandle = (e)=>{
        setSearchBy(e.target.value);
    }

    const handleSearch = ()=>{
        console.log(searchBy);

        if(!searchBy){
            toast.warning("Please Select Search Type")
            return 
        }
        if(searchKey === ''){
            toast.warning("Please Enter Search Value")
            return
        }
    
        if(searchBy === 'Name' ){
            navigate(`/names/${searchKey}`)
        }
        if(searchBy === 'Cuisine'){
            navigate(`/cusines/${searchKey}`)
        }
        if(searchBy === 'Ingredient'){
            console.log(searchKey);
            navigate(`/ingridients/${searchKey}`)
        }
        setSearchKey('')
    }

  return (
    <StyledContainer>
        <StyledSeachBoard>
            <SeachBydiv>
                <StyledInput
                    width='2rem'

                    type='radio'
                    id='Name'
                    name='searchby'
                    value='Name'
                    onChange={radioChangeHandle}
                >
                </StyledInput>
                <StyledLabel
                    htmlFor='Name'

                    margin="3px"
                    padding = '6px'
                    width = '7rem'
                >
                    Name
                    <span>eg, Panner tikka</span>
                </StyledLabel>

                <StyledInput
                    width='2rem'

                    type='radio'
                    id='Cuisine'
                    name='searchby'
                    value='Cuisine'

                    onChange={radioChangeHandle}

                >
                </StyledInput>
                <StyledLabel
                    htmlFor='Cuisine'
                    margin="3px"
                    padding = '6px'
                    width = '7rem'
                >
                    Cuisine
                    <span>eg, indian, italian</span>
                </StyledLabel>

                <StyledInput
                    type='radio'
                    width='2rem'
                    id='Ingredient'
                    name='searchby'
                    value='Ingredient'
                    onChange={radioChangeHandle}

                >
                </StyledInput>
                <StyledLabel
                    htmlFor="Ingredient"

                    margin="3px"
                    padding = '6px'
                    width = '7rem'
                >
                    Ingredient
                    <span>eg, Tomato,chesse</span>
                </StyledLabel>



                
            </SeachBydiv>


            <StyledInput
                width="20rem"

                type='text'
                placeholder={searchBy === "Name" ? 
                            "eg, Panner tikka" : searchBy === "Cuisine" ? 
                            "eg, indian, italian" : searchBy === "Ingredient" ? "eg, Tomato,chesse" : "Search Recipies" }

                disabled = { searchBy ? false : true}
                value = {searchKey}
                onChange={(e)=>setSearchKey(e.target.value)}
            >
            </StyledInput>


            <StyledBtn 
                onClick={handleSearch}
             >
                Seach
            </StyledBtn>

        </StyledSeachBoard>
    </StyledContainer>
  )
}

const StyledSeachBoard = styled.div`

    margin : 17vh auto 2rem;
    width : fit-content;
    height : fit-content;
    background-color : #EAEAEA;
    border-radius : 1rem;
    display : flex;
    justify-content : center;
    align-items : center;
    gap : 1rem;
    padding : 2rem 3rem;
`

const SeachBydiv = styled.div`
    display : flex;
    flex-direction : row;
    justify-content :center;
    align-items : center;
`

export const StyledLabel = styled.label`
    font-size : 1.2rem;
    width : ${(props)=>props.width || "100%"};
    margin : ${(props)=>props.margin || "0 0 0 0"};
    padding : ${(props)=>props.padding || "0 0 0 0"};
    color : var(--color-primary-head);
    font-weight : 600;
    transition : all 0.3s;
    display : flex;
    flex-direction : column;
    span{
        font-size : 10px;
    }
`

export const StyledInput = styled.input`
    width : ${(props)=>props.width || "100%"};
    height : ${(props)=>props.height || "2.5rem"};
    outline-style : none;
    border : none;
    border-bottom : ${(props)=>props.borderBottom || "1.5px dashed gray"};
    border-radius: 0.3rem;
    padding : ${(props)=>props.padding || "6px 10px"};
    background-color : ${(props)=>props.backgroundColor || "#ffff"};
    transition : all 0.3s;
    &:focus{
        border-bottom-color : var(--color-primary);
        background-color : ${(props)=>props.backgroundColorFocus || ""};        
    }
`

export default SearchBar
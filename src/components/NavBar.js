import React from 'react'
import styled from 'styled-components'
import { StyledContainer, StyledBtn } from '../utils/StyledContainer'
import logo  from "../media/logos/rblogo.jpg";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate()


  return (
    <>
    <NavDiv>
        <div className='logo_div' onClick={()=>navigate('/')} >
            <img src={logo}  />
            <div className='title_div' >
                <h1>The Recipe Book</h1>
                <p>Assignment Project For GENIOBITS PRIVATE LIMITED </p>
            </div>
        </div>
        <div className='btn_container' >
            <StyledBtn>
                login
            </StyledBtn>
            <StyledBtn>
                Signup
            </StyledBtn>
        </div>
    </NavDiv>
    </>
  )
}

const NavDiv = styled.div`
    -webkit-box-shadow: -1px 4px 10px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 4px 10px -8px rgba(0,0,0,0.75);
    box-shadow: -1px 4px 10px -8px rgba(0,0,0,0.75);

    position : fixed;
    z-index : 999;
    width : 100%;
    height : 15vh;
    padding : 0.5rem 2rem;
    background-color : #B2B2B2;
    display : flex;
    align-items : center;
    justify-content : space-between;
    .logo_div{
        display : flex;
        align-items : center;
        gap : 1rem;
        cursor : pointer;
    }
    img {
        width : 5rem;
        border-radius : 5rem;
    };
    .title_div{
        display : flex;
        flex-direction : column;
        p {
            font-size : 0.7rem;
        }
    }

`

export default NavBar
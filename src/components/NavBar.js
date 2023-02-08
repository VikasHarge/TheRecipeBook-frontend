import React from 'react'
import styled from 'styled-components'
import { StyledContainer, StyledBtn } from '../utils/StyledContainer'

const NavBar = () => {


  return (
    <>
        <StyledContainer 
            color='#B2B2B2'
        >
            <NavDiv>
                <div className='logo_div' >
                    <img src='./rblogo.jpg'  />
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
        </StyledContainer>
    </>
  )
}

const NavDiv = styled.div`
    width : 100%;
    background-color : #B2B2B2;
    display : flex;
    align-items : center;
    justify-content : space-between;
    .logo_div{
        display : flex;
        align-items : center;
        gap : 1rem;
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
import React from 'react'
import styled from 'styled-components'
import { StyledContainer, StyledBtn } from '../utils/StyledContainer'
import logo  from "../media/logos/rblogo.jpg";


const FooterBar = () => {


  return (
    <>
    <FooterDiv>
        <div className='logo_div' >
            <img src={logo}  />
            <div className='title_div' >
                <h1>The Recipe Book</h1>
                <p>Assignment Project For GENIOBITS PRIVATE LIMITED </p>
            </div>
        </div>
        <div className='btn_container' >
            <h2>Design and Developed By : <a href='https://www.linkedin.com/in/vikas-harge/' target='blank' >Vikas Harge</a></h2>
        </div>
    </FooterDiv>
    </>
  )
}

const FooterDiv = styled.div`
    -webkit-box-shadow: -1px 4px 10px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 4px 10px -8px rgba(0,0,0,0.75);
    box-shadow: -1px 4px 10px -8px rgba(0,0,0,0.75);


    width : 100%;
    font-size : 0.5rem;
    height : 10vh;
    padding : 0.5rem 2rem;
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
        width : 2rem;
        border-radius : 5rem;
    };
    .title_div{
        display : flex;
        flex-direction : column;
        p {
            font-size : 0.5rem;
        }
    }

`

export default FooterBar
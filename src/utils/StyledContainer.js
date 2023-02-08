import styled from "styled-components";

export const StyledContainer = styled.div`
    width : 100%;
    height : ${(props)=>props.height || "max-content"};
    padding : 0.3rem 3rem;
    background-color : ${(props)=>props.color || "#ffff"};
    margin : 0 auto;
`

export const StyledBtn = styled.button`
    padding : ${(props)=> props.padding || "6px 8px"};
    border-radius : ${(props)=>props.borderRadius || "0.5rem"};
    border : 2px solid ;
    border-color : ${(props)=>props.backgroundColor || "black"};
    background-color : ${(props)=>props.backgroundColor || "black"};
    color : ${(props)=>props.color || "#ffff"};
    font-size : ${(props)=>props.fontSize || "1rem"};
    font-weight : 700;
    transition : all 0.6s;
    margin : 0 0.3rem;
    cursor: pointer;
    &:hover{
        background-color : ${(props)=>props.color || "#ffff"};
        color : ${(props)=>props.backgroundColor || "black"};
        border-color : ${(props)=>props.backgroundColor || "#black"} !important;
    }
`
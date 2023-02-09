import styled from "styled-components";

export const StyledContainer = styled.div`
    width : 100%;
    height : ${(props)=>props.height || "max-content"};
    padding : 0.3rem 5rem;
    background-color : ${(props)=>props.color || "#ffff"};
    margin : 0 auto;
    h1 {
        font-size : 1.5rem;
        padding-left : 6px;
        margin-bottom : 12px;
        border-left : 6px solid gray;
    }
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

export const CartContainer = styled.div`
    width : 100%;
    height : fit-content;
    display: flex;
    justify-content : space-between;
    flex-wrap : wrap;
    gap : 2rem;
`

export const SpacerContainer = styled.div`
    width : 100%;
    height : ${(props)=>props.height || "2rem"};
`

export const ErrorMsgContainer = styled.div`
    width : 100%;
    height : 30vh;
    display : flex;
    justify-content : center;
    align-items : center;
    h1{
        font-size : 1rem;
        padding : 0.5rem 1rem;
        border : 1px solid red;
        color : red;
        border-radius : 6px;
    }
`
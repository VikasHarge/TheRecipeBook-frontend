import styled from "styled-components";



export const StyledLoginSignupContainer = styled.div`
    width : 100%;
    height : ${(props)=>props.height || "inherit"};
    display : grid;
    grid-template-columns : 1fr 1fr;
    border-radius : 1rem;
    transition: all 1s ease-in-out;
    background-image : ${((props)=>props.backgroundImg)};

`
export const StyledLoginWelcomeImg = styled.div`
    border-radius : 1rem 0 0 1rem;
    transition: all 1s ease-in-out;
`

export const StyledLoginSignupForm = styled.div`
    background-color : #ffff;
    border-radius : 1rem;
    transition: all 1s ease-in-out;
    padding : 1rem;
`

export const StyledOverly = styled.div`
  position: fixed; 
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  transition: opacity 500ms;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 5s ease-in-out;
`


export const PopupDiv = styled.div`
  border-radius: 1rem;
  padding: ${(props)=>props.padding || "20px"};
  background-color:${(props)=>props.backgroundColor || "#ffff"};
  width: ${(props)=>props.width || "55%"};
  height: ${(props)=>props.height || "max-content"};
  position: relative;
  transition: all 5s ease-in-out;
`


export const StyledInput = styled.input`
    width : ${(props)=>props.width || "100%"};
    height : ${(props)=>props.height || "2rem"};
    margin-bottom : 1.3rem;
    outline-style : none;
    border : none;
    border-bottom : ${(props)=>props.borderBottom || "1.5px dashed gray"};
    border-radius: 0.3rem;
    padding : ${(props)=>props.padding || "6px 10px"};
    background-color : ${(props)=>props.backgroundColor || 'gray'};
    transition : all 0.3s;
    &:focus{
        border-bottom-color : black;
        background-color : ${(props)=>props.backgroundColorFocus || "gray"};        
    }
`

export const StyledInputTextArea = styled.textarea`
    width : ${(props)=>props.width || "100%"};
    height : 2rem;
    margin-bottom : 1rem;
    outline-style : none;
    border : none;
    border-bottom : 1.5px dashed gray;
    border-radius: 0.3rem;
    padding : 6px 10px;
    transition : all 0.3s;
    &:focus{
        border-bottom : 1.5px dashed var(--color-primary);
    }
`

export const StyledLabel = styled.label`
    font-size : 14px;
    margin : ${(props)=>props.margin || "0 0 0 0"};
    padding : ${(props)=>props.padding || "0 0 0 0"};
    color : var(--color-primary-head);
    font-weight : 600;
    transition : all 0.3s;
    span{
        font-size : 10px;
    }
`

export const RadioDiv = styled.div`
    display : flex;
    align-items : flex-start;
    justify-content : space-evenly;
    width : inherit;
    min-height : max-content;
    border : 1px dashed grey;
    border-radius : 0.6rem;
    padding : 6px;
    margin: ${(props)=>props.margin || "0.9rem 0  1.2rem 0"};
    transition : all 0.3s;
    &:focus-within{
        border : 1px dashed var(--color-primary-head);
    }

    .radioInputContainer{
        display : flex;
        justify-content : center;
        align-items : center;
    }

`
export const StyledLabelRadio = styled(StyledLabel)`
    margin : 0;
    padding : 0;
    margin-left : 0.2rem;
    transition : all 0.3s;

`

export const StyledInputRadio = styled.input`

    margin : 0 3px;

`

export const FileDiv = styled(RadioDiv)`
    height : auto;
    display : flex;
    align-items: flex-start;
    justify-content: space-evenly;
    align-content: normal;
    flex-direction: column;
    transition : all 0.3s;
    &:focus-within{
        border : 1px dashed var(--color-primary-head);
    }

    div{
        display : flex;
        justify-content : center;
        align-items : center;
        height : 50px;
    }
`

export const StyledFileInput = styled(StyledInput)`
    margin-bottom : 0;
    width : 100%;
    transition : all 0.3s;
`


export const StyledButton = styled.button`
  display : inline-block;
  text-decoration : none;
  font-size : ${(props)=>props.fontSize || "0.8rem"};
  border: none;
  list-style: none;
  padding: ${(props)=>props.padding || "6px 8px"};
  margin : 5px;
  background-color: ${(props)=> props.color || "#244789"};
  border-radius: 0.4rem;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    background-color: #ffff;
    border: 1px solid ${(props)=> props.color || "#244789"};
    color: ${(props)=> props.color || "#244789"};
  }
`;


export const StyledSubmitButton = styled(StyledButton)`
    background-color: green;
    padding: 10px 8px;
    margin : ${(props)=>props.margin || "0 0 0 0"};
    width : auto;
    &:hover {
        border: 1px solid green;
        color : green;
    }

`

export const StyledCloseOverlyBtn = styled.button`
    position : absolute;
    right : 0;
    top : 0;
    left : '';
    bottom : '';
    transition : 0.3s all;
    padding : ${(props)=> props.padding || "6px 8px"};
    border-radius : ${(props)=>props.borderRadius || "0 0.5rem"};
    border : 2px solid;
    border-color : ${(props)=>props.backgroundColor || "red"};
    background-color : ${(props)=>props.backgroundColor || "red"};
    color : ${(props)=>props.color || "#ffff"};
    font-size : ${(props)=>props.fontSize || "1rem"};
    font-weight : 700;
    cursor: pointer;
    &:hover{
        background-color : ${(props)=>props.color || "#ffff"};
        color : ${(props)=>props.backgroundColor || "red"};
        border-color : ${(props)=>props.backgroundColor || "#ffff"} !important;
    }
`
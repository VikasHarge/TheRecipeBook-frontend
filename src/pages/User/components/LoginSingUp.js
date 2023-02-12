import React, { Fragment, useEffect, useRef, useState } from "react";
import banner from "../../../media/banner/banner.jpg"
import { useNavigate } from "react-router-dom";

import {
  StyledLoginSignupContainer,
  StyledLoginSignupForm,
  StyledLoginWelcomeImg,
  StyledOverly,
  PopupDiv,
  StyledInput,
  StyledLabel,
  StyledSubmitButton,
  StyledCloseOverlyBtn
} from "../styled/containerLoginSignup";

import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { RiLockPasswordFill, RiAccountPinCircleFill } from "react-icons/ri";
import "../LoginSignupStyle.css";


import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../utils/Loader";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { clearError, login, registerUser } from "../../../app/features/user/userSlice";



const LoginSingUp = () => {

  const dispatch = useDispatch()
  const {error, loading, isAuthenticated, userData } = useSelector(state=>state.user)
  const navigate = useNavigate()

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);
  const loginTitle = useRef(null)
  const singUpTitle = useRef(null)


  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginDetails = {
    loginEmail:loginEmail,
    loginPassword:loginPassword
  }


  const [user, setUser] = useState({
    name : '',
    email : '',
    password : '',
  })

  const {name, email, password} = user;
  const [signupConPassword, setSignupConPassword] = useState("")

  useEffect(()=>{
    if(isAuthenticated){
      toast.success("Logged in Successfully")
      navigate('/user/details')
    }
  },[isAuthenticated])

  const loginSubmit = (e) => {
    e.preventDefault();
    if(loginEmail === ''){
      toast.warning("Please Enter Login Email")
      return
    }
    if(loginPassword === ''){
      toast.warning("Please Enter Login Password")
      return
    }
    dispatch(login(loginDetails))
  };


  const signupSubmit = (e)=>{
    e.preventDefault();

    if(name === ''){
      toast.warning("Please Fill Name");
      return
    }
    if(password === ''){
      toast.warning("Please Fill Password");
      return
    }
    if(email === ''){
      toast.warning("Please Fill valid Email");
      return
    }

    if(signupConPassword !== password){
      toast.warning("Confirm Password Dont match")
      return 
    }



    console.log(name, email, password)
    dispatch(registerUser({name, email, password}));

  }



  //Input Styling 
  const inputStyleProps = {
    backgroundColor:"#EAEAEA",
    backgroundColorFocus:"#ffff",
    borderBottom:"2px dashed gray",
    padding : "3px 10px",
    height:"2rem",
  }


  useEffect(()=>{
    setTimeout(()=>{
      loginTitle.current.classList.add('tabColor')
    },3000)
  },[])

  const switchTab = (e, tab) => {
  
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");
      loginTitle.current.classList.add('tabColor')
      singUpTitle.current.classList.remove('tabColor')

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }

    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");
      loginTitle.current.classList.remove('tabColor')
      singUpTitle.current.classList.add('tabColor')

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }

  };

  const close = ()=>{
    navigate('/')
  }




  return (
    <Fragment>
      {loading ? 
        (<Loader/>)
        :
        (<StyledOverly>
      <PopupDiv width="55%" padding="0">
        <StyledLoginSignupContainer
            backgroundImg = {banner}
            className="StyledLoginSignupContainer"
        >
          <StyledLoginWelcomeImg>
          </StyledLoginWelcomeImg>
          <StyledLoginSignupForm>
            <StyledCloseOverlyBtn
              onClick={close}
              backgroundColor = "red"
            >
                X
            </StyledCloseOverlyBtn>
            <div className="loginSignupBox">
              <div>
                <div className="login-signup-toggle">
                  <p onClick={(e) => switchTab(e, "login")} ref={loginTitle} >LOGIN</p>
                  <p onClick={(e) => switchTab(e, "register")} ref={singUpTitle} >SIGNUP</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginform" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <div className="loginLableContainer">
                    <MdEmail />
                    <StyledLabel htmlFor="loginEmailInput">
                      Enter Login Email
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="loginEmailInput"
                    type="email"
                    name="loginEmailInput"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    {...inputStyleProps}
                    height="2rem"

                  />
                </div>
                <div className="loginPassword">
                  <div className="loginLableContainer">
                    <RiLockPasswordFill />
                    <StyledLabel htmlFor="loginPasswordInput">
                      Enter Password
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="loginPasswordInput"
                    type="password"
                    name="loginPasswordInput"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    {...inputStyleProps}
                    height="2rem"

                  />
                </div>
                <StyledSubmitButton
                    margin="0 0 6px 0"
                
                >Login</StyledSubmitButton>
              </form>


              {/* Register Form */}
              <form className="signUpForm"  ref={registerTab} >
                {/* User Name */}
                <div className="signupName">
                  <div className="signupLableContainer">
                    <RiAccountPinCircleFill />
                    <StyledLabel htmlFor="name">
                      Full Name
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e)=>setUser({...user, name : e.target.value})}
                    {...inputStyleProps}
                  />
                </div>
                {/* User Email */}
                <div className="email">
                  <div className="signupLableContainer">
                    <MdEmail />
                    <StyledLabel htmlFor="signupEmailInput">
                      Your Email
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="signupEmailInput"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e)=>setUser({...user, email : e.target.value})}
                    {...inputStyleProps}
                  />
                </div>


                {/* signup Password */}
                <div className="password">
                  <div className="signupLableContainer">
                    <RiLockPasswordFill />
                    <StyledLabel htmlFor="signupPasswordInput">
                      Enter Password
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setUser({...user, password : e.target.value})}
                    {...inputStyleProps}
                  />
                </div>
                {/* Confirm Password */}
                <div className="signupConPassword">
                  <div className="signupLableContainer">
                    <RiLockPasswordFill />
                    <StyledLabel htmlFor="signupConPasswordInput">
                      Confirm Password
                    </StyledLabel>
                  </div>
                  <StyledInput
                    id="conPassword"
                    type="password"
                    name="conPassword"
                    value={signupConPassword}
                    onChange={(e)=>setSignupConPassword(e.target.value)}
                    {...inputStyleProps}
                  />
                </div>

                <input
                    type="submit"
                    value="Register"
                    className="registerBtn"
                    // disabled={loading ? true : false}
                    onClick={signupSubmit}
                />
              </form>
            </div>
          </StyledLoginSignupForm>
        </StyledLoginSignupContainer>
      </PopupDiv>
    </StyledOverly>)}
    </Fragment>
  );
};

export default LoginSingUp;

import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Pages from './pages/Pages';
import FooterBar from './components/FooterBar';
import AcountLoginSignup from './pages/User/AcountLoginSignup'
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './app/features/user/userSlice';

function App() {

  //Chheck if logged in
  const dispatch = useDispatch()
  const {isAuthenticated, userData} = useSelector((state)=>state.user)

  useEffect(()=>{
    console.log("loader User runs");
    dispatch(loadUser())
    console.log(userData);
  },[dispatch])

  return (
    <>
      <NavBar />
      <ToastContainer/>
      <Routes>
        <Route index path='*' element= {<Pages/>} />
        <Route path = '/user/details' element = { <User />} />
        <Route path = '/user/loginSignup' element = {<AcountLoginSignup />} />
      </Routes>
      <FooterBar />
    </>
  );
}

export default App;

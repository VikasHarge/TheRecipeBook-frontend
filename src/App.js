import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path = '/user' element = {<User />} />
      </Routes>
    </>
  );
}

export default App;

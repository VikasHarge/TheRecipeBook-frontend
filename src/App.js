import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Pages from './pages/Pages';
import FooterBar from './components/FooterBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path='*' element= {<Pages/>} />
        <Route path = '/user' element = {<User />} />
      </Routes>
      <FooterBar />
    </>
  );
}

export default App;

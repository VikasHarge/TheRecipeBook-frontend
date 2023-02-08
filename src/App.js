import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Pages from './pages/Pages';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path='*' element= {<Pages/>} />
        <Route path = '/user' element = {<User />} />
      </Routes>
    </>
  );
}

export default App;

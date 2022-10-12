import logo from './logo.svg';
import './App.css';
import NavBar from './componets/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import ServiceMK from './componets/ServiceMK';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = {'/'} element = {<Home/>} />
          <Route path = {'/servs'} element = {<ServiceMK/>
        } />
        </Routes>
      </BrowserRouter>
    </>  
    
  );
}

export default App;

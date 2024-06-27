import React  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';

function App() {
  return (
    <>

    <NoteState>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path='/notes' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
      <Route exact path='/' element={<Main/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </NoteState>

    </>
  )
}

export default App

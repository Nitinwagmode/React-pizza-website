import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Menu' exact element={<Menu />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

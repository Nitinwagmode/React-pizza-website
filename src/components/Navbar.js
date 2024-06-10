import React, { useState } from 'react';
import Logo from "../assets/pizzaLogo.png";
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} alt="Pizza Logo" />
        <div className={`hiddenlinks ${showLinks ? 'show' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleLinks}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

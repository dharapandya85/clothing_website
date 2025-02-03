import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <button className="menu-button" onClick={onToggleSidebar}>
      ☰
    </button>
    <Link to="/">
    <button className="home-button">
        Home</button>
      </Link>
        <nav className="header-links">
        <div className="logo">
          <img src="/pics/copyright.gif" alt="Neopremia Logo"/>Neopremia</div>
          <Link to="/about-us">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact-us">Contact</Link>
        </nav>
        <div className="user-actions">
        <Link to="/account">User Account</Link>
      </div>
        <div className="header-banner">
          <img src="/pics/marksglogo.jpg" alt="Mark SG Logo"/>
          <img src="/pics/weareintheuk.gif" alt="We are in the UK"/>
        <b>UK Custom neoprene products. Fast delivery and unbeatable prices.</b>
        </div>
       
        
      
      
    </header>
    
  )
}

export default Header;


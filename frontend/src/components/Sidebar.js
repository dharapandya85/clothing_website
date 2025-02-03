import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ onClose }) => {
  return (
    <aside className="sidebar">
      <button className="close-button" onClick={onClose}>X</button>
      <ul className="sidebar-links">
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/about-neoprene">About Neoprene</Link></li>
        <li><Link to="/color-info">Color Info</Link></li>
        <li><Link to="/artwork-info">Artwork Info</Link></li>
        <li><Link to="/lead-times">Lead Times</Link></li>
        <li><Link to="/terms">Terms Of Use</Link></li>
        <li><Link to="/enquiry-form">Enquiry Form</Link></li>
        <li><a href="https://promofoam.com" target="_blank" rel="noopener noreferrer">PromoFoam</a></li>
        <li><a href="https://brandthefans.com" target="_blank" rel="noopener noreferrer">Brand the Fans</a></li>
        <li><a href="https://uvgear.com" target="_blank" rel="noopener noreferrer">UV Gear</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

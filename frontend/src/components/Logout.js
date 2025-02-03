import React from 'react';
import './Auth.css';

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    alert('Logged out successfully!');
    onLogout();
  };

  return (
    <div className="auth-page">
      <h2>Are you sure you want to logout?</h2>
      <button onClick={handleLogout}>Yes, Logout</button>
    </div>
  );
};

export default Logout;

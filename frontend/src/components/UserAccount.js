import React, { useState } from 'react';
import './UserAccount.css';

const UserAccount = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ avatar: '', name: '' });

  const handleLogin = () => {
    // Mock login logic
    setUser({ avatar: '', name: '' });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser({ avatar: '/icons/user-icon.jpg', name: {} });
    setIsLoggedIn(false);
  };

  return (
    <div className="user-account">
      {isLoggedIn ? (
        <div className="user-info">
          <img src={user.avatar} alt="User Avatar" className="avatar" />
          <p>Welcome, {user.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="auth-forms">
          <a href="/login">Login </a>
          
          <a href="/signup">Sign Up</a>
          <a href="/logout">Sign Out</a>
        </div>
      )}
    </div>
  );
};

export default UserAccount;

import React from 'react';
import './CookiesNotice.css';

const CookiesNotice = ({ onAccept, onReject }) => (
  <div className="cookies-notice">
    <p>We use cookies to enhance your experience. Do you accept?</p>
    <button onClick={onAccept}>Accept</button>
    <button onClick={onReject}>Reject</button>
  </div>
);

export default CookiesNotice;

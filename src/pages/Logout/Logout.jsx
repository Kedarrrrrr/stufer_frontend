import React, { useState } from 'react';
import './Logout.css'; 

const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">
       
      <button className="popup-btn" onClick={togglePopup}>
        LOG-OUT
      </button>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
             
            <h2>LOG-OUT</h2>
            <p>Are you sure you want to"LOG-OUT"</p>
            <button className='log-out-button-logout'> log-out </button>
            <button className='log-out-button-cancel' onClick={togglePopup} > cancel </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
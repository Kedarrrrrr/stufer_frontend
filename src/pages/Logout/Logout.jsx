import React, { useState } from 'react';
import './Logout.css';
import { Button } from 'react-bootstrap';

const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">

      <Button className="popup-btn" variant="outline-danger" onClick={togglePopup}>
        LOG-OUT
      </Button>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-box">

            <h2>LOG-OUT</h2>
            <p>Are you sure you want to"LOG-OUT"</p>

            <Button variant="outline-danger">
              LOG-OUT
            </Button>
            <Button variant='outline-secondary' onClick={togglePopup}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
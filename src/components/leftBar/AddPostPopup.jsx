import React, { useState } from 'react';
import './AddPostPopup.css';
import { IoAddOutline } from "react-icons/io5";
import { GoFileMedia } from "react-icons/go";
import { Button } from 'react-bootstrap';

const AddPostPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [media, setMedia] = useState(null);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) setMedia(file);
  };

  return (
    <div className="popup-container">

      <IoAddOutline onClick={togglePopup} style={{ cursor: 'pointer' }} />


      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-box">

            <h2 style={{ color: 'white' }} >Add Post</h2>
            <form className="popup-form">

              <textarea
                placeholder="Post Description"
                className="popup-textarea"
              ></textarea>

              {/* File Upload */}
              <div className="media-upload">
                <label htmlFor="media-input" className="upload-icon-btn" title="Upload Image or Video">
                  <GoFileMedia />
                </label>
                <input
                  type="file"
                  id="media-input"
                  accept="image/,video/"
                  onChange={handleMediaChange}
                />
                {media && <span className="media-name">{media.name}</span>}
              </div>
              <div className='addpost-popup-btn'>
                <Button type="submit" className='w-50' variant="outline-success">
                  Add
                </Button>

                <Button className='w-50 mx-1' variant="outline-secondary" onClick={togglePopup}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPostPopup;
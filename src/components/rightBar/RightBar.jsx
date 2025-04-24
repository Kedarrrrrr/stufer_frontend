
import "./RightBar.css";
import "./AddPostPopup.css";
import { useState } from "react";
import { GoFileMedia } from "react-icons/go";


import { FiPlus } from 'react-icons/fi';
import { Button } from "react-bootstrap";
import AddPostPopup from "../leftBar/AddPostPopup";



const RightBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [media, setMedia] = useState(null);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) setMedia(file);
  };


  return (
    <>

      {/* <div className="popup-container">




        {isOpen && (
          <div className="popup-overlay">
            <div className="popup-box">

              <h2 style={{ color: 'white' }} >Add Post</h2>
              <form className="popup-form">

                <textarea
                  placeholder="Post Description"
                  className="popup-textarea"
                ></textarea>

             
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
      </div> */}

      <div className="container">
        <div className="right-post-button">

          <button className="plus-button" >
         <AddPostPopup/>
          </button>
        </div>
      </div>
    </>
  );
};

export default RightBar;

import React, { useState } from "react";
import "./Profile.css";
import Home from "../../pages/home/Home";
import "./AddPostPopup.css";
import { GoFileMedia } from "react-icons/go";
import { Button } from "react-bootstrap";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [media, setMedia] = useState(null);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) setMedia(file);
  };

  return (
    <>
      <div className="display-flex">
        <div className="profile-container">
          <div className="profile-header">
            <img
              className="avatar"
              src="https://i.pravatar.cc/150?img=5"
              alt="Profile"
            />
            <div>
              <h2 className="username">kedar patil</h2>
              <p className="handle">@kedarrrrr</p>

              <span className="followers">
                <span>200</span>followers
              </span>
            </div>
          </div>

          <div className="tabs">
            {/* add post */}
            <div className="popup-container">
              {isOpen && (
                <div className="popup-overlay">
                  <div className="popup-box">
                    <h2 style={{ color: "white" }}>Add Post</h2>
                    <form className="popup-form">
                      <textarea
                        placeholder="Post Description"
                        className="popup-textarea"
                      ></textarea>

                      {/* File Upload */}
                      <div className="media-upload">
                        <label
                          htmlFor="media-input"
                          className="upload-icon-btn"
                          title="Upload Image or Video"
                        >
                          <GoFileMedia />
                        </label>
                        <input
                          type="file"
                          id="media-input"
                          accept="image/,video/"
                          onChange={handleMediaChange}
                        />
                        {media && (
                          <span className="media-name">{media.name}</span>
                        )}
                      </div>
                      <div className="addpost-popup-btn">
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

            <button className="tab" onClick={togglePopup}>
              Add Post
            </button>
          </div>
          <div></div>
        </div>

        <Home />
      </div>
    </>
  );
}

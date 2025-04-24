import React, { useState } from 'react';
import './AddPostPopup.css';
import { IoAddOutline } from "react-icons/io5";
import { GoFileMedia } from "react-icons/go";
import { Button } from 'react-bootstrap';

const AddPostPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [media, setMedia] = useState(null);
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');

  // Toggle the popup visibility
  const togglePopup = () => setIsOpen(!isOpen);

  // Handle file selection (image/video)
  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) setMedia(file);
  };

  // Handle form submission (uploading post data)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('caption', caption);
    if (media) formData.append('photo', media);

    try {
      const response = await fetch('http://localhost:5000/api/blog/uploads', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        // Reset the form and close the popup
        setTitle('');
        setCaption('');
        setMedia(null);
        togglePopup();
        console.log('Post added successfully:', result);
      } else {
        console.error('Error uploading post:', result.message);
      }
    } catch (error) {
      console.error('Error uploading post:', error);
    }
  };

  return (
    <div className="popup-container">
      <IoAddOutline onClick={togglePopup} style={{ cursor: 'pointer', color: '#fff' }} />

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Add Post</h2>
            <form className="popup-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Post Title"
                className="popup-textarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <textarea
                placeholder="Post Description"
                className="popup-textarea"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                required
              ></textarea>

              {/* File Upload */}
              <div className="media-upload">
                <label htmlFor="media-input" className="upload-icon-btn" title="Upload Image or Video">
                  <GoFileMedia />
                </label>
                <input
                  type="file"
                  id="media-input"
                  accept="image/*,video/*"
                  onChange={handleMediaChange}
                />
                {media && <span className="media-name">{media.name}</span>}
              </div>

              <div className="addpost-popup-btn">
                <Button type="submit" className="w-50" variant="outline-light">
                  Add
                </Button>

                <Button
                  className="w-50 mx-1"
                  variant="outline-light"
                  onClick={togglePopup}
                >
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

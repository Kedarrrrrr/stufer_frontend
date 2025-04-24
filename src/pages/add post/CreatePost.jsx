import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    caption: '',
    photo: null,
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('title', formData.title);
    data.append('caption', formData.caption);
    if (formData.photo) data.append('photo', formData.photo);
    if (formData.video) data.append('video', formData.video);

    try {
      const res = await axios.post('http://localhost:5000/api/blog/uploads', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(res.data);
      alert('Upload successful!');
    } catch (error) {
      console.error(error);
      alert('Upload failed');
    }
  };

  return (
    <div className="container">
      <form className="create-box-border" onSubmit={handleSubmit}>
        <div className="create-header">
          <p>New Drop</p>
          <p>Cancel</p>
        </div>

        <div className="create-header-end">
          {/* Optional additional header controls */}
        </div>

        <div className="create-content">
          <p>Title</p>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <p>Caption</p>
          <input
            type="text"
            name="caption"
            value={formData.caption}
            onChange={handleChange}
          />

          <p>Upload Photo</p>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />

          <p>Upload Video</p>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleChange}
          />

          <br />
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;

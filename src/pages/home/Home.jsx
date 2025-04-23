
import "./Home.css";
import"./Utility.css";
import React, { useEffect, useState } from 'react';

import { IoHeartOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";



const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts.json') 
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error loading posts:", error));
  }, []);

  return (
    <div className="container">
      <div className="margin-left">
      {posts.map((post, index) => (
        <div className="post-box" key={index}>
          <div className="posts">
            <div className="post-header">
              <img
                className="profile-pic"
                src={post.profilePicture}
                alt={`${post.fullName}'s profile`}
              />
              <p className="postUserName">{post.fullName}</p>
          
            </div>

            <div className="post-content">
              <p className="postCaption">{post.caption}</p>

              <div className="postMedia">
                {post.images.map((img, imgIndex) => (
                  <div  key={imgIndex}>
                    <img className="postImg" src={img} alt={`Post image ${imgIndex + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="post-interact">
                <IoHeartOutline style={{fontSize:"24px", marginRight:"1rem"}}/>
                <GoComment style={{fontSize:"22px"}}/>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Home;

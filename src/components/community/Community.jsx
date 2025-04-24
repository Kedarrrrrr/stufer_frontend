import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Community.css"; // Assuming you have a CSS file for styling

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch community posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace this with your actual API endpoint
        const response = await axios.get("http://localhost:5000/api/community/posts");
        
        // Set posts data
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="community-container">
      <h1 className="community-title">Community</h1>
      <p className="community-description">
        Welcome to the community page. Here you can find all the latest posts, discussions, and more!
      </p>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="community-content">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post._id} className="post">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Community;

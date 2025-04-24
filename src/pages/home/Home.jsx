import "./Home.css";
import "./Utility.css";
import React, { useEffect, useState } from 'react';
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { GoComment } from "react-icons/go";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simple time format
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Example: "12:30 PM"
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/blog/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.reverse()); // Reverse the posts to show latest on top
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setError("Failed to load posts.");
        setLoading(false);
      });
  }, []);

  const handleLike = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/blog/like/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const result = await response.json();
      if (response.ok) {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === postId ? { ...post, likes: result.blog.likes } : post
          )
        );
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleComment = async (postId) => {
    if (!newComment) return;

    try {
      const response = await fetch(`http://localhost:5000/api/blog/comment/add/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ content: newComment }),
      });

      const result = await response.json();
      if (response.ok) {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === postId ? { ...post, comments: result.blog.comments } : post
          )
        );
        setNewComment('');
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleRemoveComment = async (postId, commentId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/blog/comment/remove/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ commentId }),
      });

      const result = await response.json();
      if (response.ok) {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === postId ? { ...post, comments: result.blog.comments } : post
          )
        );
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.error('Error removing comment:', error);
    }
  };

  const handleCommentClick = (postId) => {
    setSelectedPost(postId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="margin-left">
        {loading && <p>Loading posts...</p>}
        {error && <p className="error">{error}</p>}

        {posts.map((post) => (
          <div className="post-box" key={post._id}>
            <div className="posts">
              <div className="post-header">
                <img
                  className="profile-pic"
                  src={post.profilePicture || "/default-profile.png"}
                  alt={`${post.author?.username || 'User'}'s profile`}
                />
                <p className="postUserName">{post.author?.username || 'Anonymous'}</p>
              </div>

              {/* Display the time before the title */}
              <p className="postTimestamp">{formatTime(post.createdAt)}</p>

              <div className="post-content">
                <h3>{post.title}</h3>
                <p className="postCaption">{post.caption}</p>
                <div className="postMedia">
                  {post.photos?.map((photo, index) => (
                    <img className="postImg" key={index} src={photo} alt="Post" />
                  ))}
                  {post.videos?.map((video, index) => (
                    <video className="postImg" style={{ zIndex: "-1" }} key={index} controls src={video} />
                  ))}
                </div>
              </div>

              <div className="post-interact">
                {post.likes.includes(localStorage.getItem('userId')) ? (
                  <IoHeart
                    style={{ fontSize: "24px", color: "red", marginRight: "1rem", cursor: 'pointer' }}
                    onClick={() => handleLike(post._id)}
                  />
                ) : (
                  <IoHeartOutline
                    style={{ fontSize: "24px", marginRight: "1rem", cursor: 'pointer' }}
                    onClick={() => handleLike(post._id)}
                  />
                )}
                <span>{post.likes.length}</span>
                <GoComment style={{ fontSize: "22px", cursor: "pointer" }} onClick={() => handleCommentClick(post._id)} />
              </div>
            </div>
          </div>
        ))}

        {/* Comment Modal */}
        {isModalOpen && selectedPost && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <button className="close-btn" onClick={handleCloseModal}>X</button>
                <h3>Comments</h3>
              </div>
              <div className="comments">
                {posts.find((post) => post._id === selectedPost).comments.map((comment) => (
                  <div key={comment._id} className="comment">
                    <div className="comment-header">
                      <img
                        className="comment-user-avatar"
                        src={comment.user.profilePicture || "/default-profile.png"}
                        alt="User Avatar"
                      />
                      <p className="comment-user-name">{comment.user.username || 'Anonymous'}</p>
                    </div>
                    <div className="comment-content">
                      <p>{comment.content}</p>
                    </div>
                    {comment.user._id === localStorage.getItem('userId') && (
                      <button className="remove-comment-btn" onClick={() => handleRemoveComment(selectedPost, comment._id)}>
                        <i className="fas fa-trash-alt"></i> Remove
                      </button>
                    )}
                  </div>
                ))}
                <div className="add-comment">
                  <textarea
                    className="comment-input"
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button className="post-comment-btn" onClick={() => handleComment(selectedPost)}>
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

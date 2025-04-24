import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap'; // Importing Bootstrap components
import { toast, ToastContainer } from 'react-toastify'; // Importing toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importing toast CSS

const Allpost = () => {
  const [blog, setBlog] = useState([]);

  // Fetch blog posts from backend
  const getAllBlog = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/blog/');
      setBlog(res.data);
    } catch (error) {
      console.log(error);
      toast.error('Error fetching blog posts');
    }
  };

  // Delete a blog post by its ID
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blog/delete/${id}`);
      setBlog(blog.filter((item) => item._id !== id)); // Remove the deleted blog post from the state
      toast.success('Blog post removed successfully!');
    } catch (error) {
      console.log(error);
      toast.error('Error removing blog post');
    }
  };

  useEffect(() => {
    getAllBlog();
  }, []);

  return (
    <div className="container mt-5">
      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick />

      <h1 className="mb-4">All Blog Posts</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Caption</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blog.length > 0 ? (
            blog.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.caption}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteBlog(item._id)}
                  >
                    Remove Post
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No blog posts found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Allpost;

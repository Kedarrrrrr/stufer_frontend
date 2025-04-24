import React, { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { Card, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

const ForYour = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);  // To track loading state
  const [error, setError] = useState(null);      // To track error state
=======
import { Card, Container, Row, Col } from 'react-bootstrap';

const ForYour = () => {
  const [blogs, setBlogs] = useState([]);
>>>>>>> e55a830c641af75ed33807d6477f2ad5839011a6

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blog'); // Update if needed
        setBlogs(res.data);
<<<<<<< HEAD
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blogs.');
        setLoading(false);
=======
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
>>>>>>> e55a830c641af75ed33807d6477f2ad5839011a6
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">All Blogs</h2>

<<<<<<< HEAD
      {/* Show loading spinner while fetching data */}
      {loading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {/* Show error message if fetching fails */}
      {error && (
        <Alert variant="danger">
          <strong>Error!</strong> {error}
        </Alert>
      )}

      {/* Show blogs if available */}
      {!loading && !error && (
        <Row xs={1} md={2} lg={3} className="g-4">
          {blogs.map((blog, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-sm">
                {blog.photoUrl && (
                  <Card.Img variant="top" src={blog.photoUrl} alt="Blog Image" />
                )}

                {!blog.photoUrl && blog.videoUrl && (
                  <video width="100%" height="auto" controls>
                    <source src={blog.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.caption}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    By {blog.author?.username} ({blog.author?.email})
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
=======
      <Row xs={1} md={2} lg={3} className="g-4">
        {blogs.map((blog, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm">
              {blog.photoUrl && (
                <Card.Img variant="top" src={blog.photoUrl} alt="Blog Image" />
              )}

              {!blog.photoUrl && blog.videoUrl && (
                <video width="100%" height="auto" controls>
                  <source src={blog.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.caption}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  By {blog.author?.username} ({blog.author?.email})
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
>>>>>>> e55a830c641af75ed33807d6477f2ad5839011a6
    </Container>
  );
};

export default ForYour;

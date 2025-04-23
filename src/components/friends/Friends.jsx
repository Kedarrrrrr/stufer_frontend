import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Friends = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const token = localStorage.getItem('token');

                const res = await axios.get('http://localhost:5000/api/blog/feed', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                 
                 console.log(res.data)

                setBlogs(res.data);
            } catch (err) {
                console.error('Failed to fetch blogs:', err);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <Container className="mt-4">
            <h2 className="mb-4">All Blogs</h2>

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
        </Container>
    );
};

export default Friends;

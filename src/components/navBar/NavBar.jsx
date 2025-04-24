import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  ListGroup,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = users.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers([]);
    }
  }, [searchTerm, users]);

  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container fluid>
        <Navbar.Brand className="text-white logo">StUfer</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="bg-white" />

        <Navbar.Collapse id="navbar-nav">
          <Form className="mx-auto w-50 position-relative">
            <FormControl
              type="search"
              placeholder="Search Someone"
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredUsers.length > 0 && (
              <ListGroup className="position-absolute w-100 search-dropdown">
                {filteredUsers.map((user) => (
                  <ListGroup.Item key={user._id}>
                    {user.username}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Form>

          <Nav className="ms-auto nav-items text-white">
            <Nav.Link as={Link} to="/for-you" className="text-white">
              For you
            </Nav.Link>
            <Nav.Link as={Link} to="/friends" className="text-white">
              Friends
            </Nav.Link>
            <Nav.Link as={Link} to="/community" className="text-white">
              Community
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

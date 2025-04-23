import { Link } from "react-router-dom";
import "./NavBar.css";
import { Navbar, Container, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container fluid>
        <Navbar.Brand className="text-white logo">StUfer</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="bg-white" />

        <Navbar.Collapse id="navbar-nav">
          <Form className="mx-auto w-50">
            <FormControl
              type="search"
              placeholder="Search Someone"
              className="search-bar"
            />
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

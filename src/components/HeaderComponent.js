import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      dark="true"
      sticky="top"
      expand="xl"
      className="navbar-dark mt-0 pt-0"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src="/assets/images/logo.svg" className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="p-3">
          <Form className="d-flex mt-3 ms-auto">
            <InputGroup>
              <InputGroup.Text className="searchBar">
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search"
                className="searchBar"
              />
            </InputGroup>
          </Form>
          <Nav className="ms-auto mt-3">
            <Nav.Link as={Link} to="/home" className="mx-2">
              <i className="bi bi-house"></i> Home
            </Nav.Link>
            {/* <Link to="/" className="nav-link">
              <i className="bi bi-house"></i> Home2
            </Link> */}
            <Nav.Link as={Link} to="/myLists/Let's Rank" className="mx-2">
              <i className="bi bi-list-ul"></i> My Lists
            </Nav.Link>
            <Nav.Link as={Link} to="/create" className="mx-2">
              <i className="bi bi-plus"></i> Create List
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="mx-2">
              <i className="bi bi-box-arrow-in-left"></i> Login/SignUp
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-warning mx-2 small">
              <i className="bi bi-question-circle"></i> How it works
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

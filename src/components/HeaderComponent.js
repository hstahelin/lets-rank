import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Button,
  FloatingLabel,
  Accordion,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GENRES } from "../shared/genres";

function Header(props) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    toggleModal();
  };

  function handleSearchSubmit(event) {
    // alert("Form Submit");
    props.onSubmit(event);
    event.preventDefault();
  }

  function handleSearchChange(event) {
    props.onChange(event);
  }

  return (
    <Navbar
      dark="true"
      sticky="top"
      expand="xl"
      className="navbar-dark mt-0 pt-0"
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src="/assets/images/logo.svg" className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="p-3">
          <Form className="d-flex mt-3 ms-auto" onSubmit={handleSearchSubmit}>
            <InputGroup>
              <InputGroup.Text className="searchBar">
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search"
                className="searchBar"
                value={props.searchText}
                onChange={handleSearchChange}
              />
            </InputGroup>
          </Form>
          <Nav className="ms-auto mt-3">
            <Nav.Link as={Link} to="/home" className="mx-2 my-auto">
              <i className="bi bi-house"></i> Home
            </Nav.Link>
            {/* <Link to="/" className="nav-link">
              <i className="bi bi-house"></i> Home2
            </Link> */}
            <Nav.Link
              as={Link}
              to="/myLists/Let's Rank"
              className="mx-2 my-auto"
            >
              <i className="bi bi-list-ul"></i> My Lists
            </Nav.Link>
            <Nav.Link className="mx-2 my-auto" onClick={toggleModal}>
              <i className="bi bi-plus"></i> Create List
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="mx-2 my-auto">
              <i className="bi bi-box-arrow-in-left"></i> Login/SignUp
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="text-warning mx-2 my-auto small"
            >
              <i className="bi bi-question-circle"></i> How it works
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/user/Let's Rank"
              className="text-info mx-2 my-auto large"
            >
              <h2 className="my-auto">
                <i className="bi bi-person-badge mb-0"></i>
              </h2>
              {/* <p className="small mb-0">Let's Rank</p> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* Create List - Modal */}
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title className="text-light">New List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <FloatingLabel
                controlId="ListName"
                label="List Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="listName"
                  placeholder="List Name"
                  {...register("listName")}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel
                controlId="Description"
                label="Description"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Description"
                  name="description"
                  {...register("description")}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Genres</Accordion.Header>
                  <Accordion.Body>
                    {GENRES.map((genre, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        id={index}
                        label={genre}
                        name={genre}
                        {...register(`${genre}`)}
                      />
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default Header;

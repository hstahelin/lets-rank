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
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addList } from "../redux/ActionCreators";

// import { GENRES } from "../shared/genres";

function Header(props) {
  const history = useHistory();

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const [listName, setListName] = useState("");

  function handleSubmit(event) {
    const newList = {
      name: listName,
      user: "Let's Rank",
      list: [],
    };
    const createdList = dispatch(addList(newList));
    // console.log(createdList.payload.id);
    setListName("");
    event.preventDefault();
    toggleModal();
    history.push(`/myLists/Let's Rank/${createdList.payload.id}`);
  }

  function handleSearchSubmit(event) {
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
          <Modal.Title className="text-light">Quick list creation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
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
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            {/* <Form.Group>
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
            </Form.Group> */}
            {/* <Form.Group>
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
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={handleSubmit}
            type="submit"
            // disabled="true"
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default Header;

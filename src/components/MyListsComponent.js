import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Offcanvas, ListGroup, Badge } from "react-bootstrap";
import { SHOWS } from "../shared/shows";
import { LISTS } from "../shared/lists";

function MyLists(props) {
  const myLists = LISTS.filter((list) => list.user === props.username);
  const [showLists, setShowLists] = useState(false);

  const handleClose = () => setShowLists(false);
  const handleShow = () => setShowLists(true);

  const listId = props.listId ? props.listId : 0;
  const currentList = LISTS.filter((list) => list.id === Number(listId))[0];
  const shows = SHOWS.filter((show) => currentList.list.includes(show.id));
  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="row featured mb-3">
          <div className="col">
            <h1>
              <Button variant="outline-primary" onClick={handleShow} size="lg">
                <i class="bi bi-list-stars"></i>
              </Button>{" "}
              My Lists{" "}
              <Badge pill bg="primary">
                {myLists.length}
              </Badge>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col featured mb-3 d-flex">
            <div className="me-auto align-self-center">
              <h3>{currentList.name}</h3>
            </div>
            <div className="align-self-center">
              <a href="recommendations.html" className="btn btn-info btn-sm">
                <i className="bi bi-stars"></i> Get recommendations
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {/* render */}
          {shows.map((show) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
              <div className="card shadow h-100">
                <Link to={`/show/${show.id}`} className="text-decoration-none">
                  <h5 className="card-header text-truncate">{show.name}</h5>
                </Link>
                <div className="card-img-top">
                  <div className="row m-0 p-0">
                    <div className="col m-0 p-0">
                      <Link to={`/show/${show.id}`}>
                        <img
                          src={show.image.medium}
                          className="d-block w-100"
                          alt="..."
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0 m-0">
                  <p className="card-genre text-center px-0 m-0 py-1">
                    {show.genres.map((genre, index, array) =>
                      index + 1 === array.length ? `${genre}` : `${genre} | `
                    )}
                  </p>
                </div>
                <div className="card-footer text-center">
                  <Link to="/home" className="text-decoration-none text-nowrap">
                    <i className="bi bi-x-square"></i> Remove
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* render */}
        </div>
        <Offcanvas show={showLists} onHide={handleClose}>
          <Offcanvas.Header
            closeButton
            className="modal-header text-light"
            closeVariant="white"
          >
            <Offcanvas.Title>My Lists</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup variant="flush">
              {myLists.map((list) => (
                <Link
                  onClick={handleClose}
                  to={`/myLists/${props.username}/${list.id}`}
                  className="text-decoration-none"
                >
                  <ListGroup.Item
                    active={Boolean(list.id === Number(listId) ? true : false)}
                    action
                    className="d-flex justify-content-between align-items-start"
                  >
                    {list.name}
                    <Badge
                      pill
                      bg={list.id === Number(listId) ? "light" : "primary"}
                      text={list.id === Number(listId) ? "dark" : "light"}
                    >
                      {list.list.length}
                    </Badge>
                  </ListGroup.Item>
                </Link>
              ))}
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <hr />
      <div className="container mt-4">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <a href="recommendations.html" class="btn btn-info btn-lg">
              <i className="bi bi-stars"></i> Get recommendations
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyLists;

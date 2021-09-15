import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Button, Offcanvas, ListGroup, Badge } from "react-bootstrap";
import { SHOWS } from "../shared/shows";
// import { USERS } from "../shared/users";

import { useSelector, useDispatch } from "react-redux";
import HelpAlert from "./HelpAlertComponent";
import { removeList, removeShowList } from "../redux/ActionCreators";

function MyLists(props) {
  const history = useHistory();

  const userLogged = useSelector((state) => state.user);

  const dispatch = useDispatch();

  let location = useLocation();
  const save = new URLSearchParams(location.search).get("save");
  const lists = useSelector((state) => state.lists);

  const myLists = lists.lists.filter((list) => list.userId === +props.userId);

  const [showLists, setShowLists] = useState(props.listId ? false : true);

  const handleClose = () => setShowLists(!showLists);
  const handleShow = () => setShowLists(true);
  if (myLists.length > 0) {
    const listId = props.listId ? props.listId : myLists[0].id;
    const currentList = lists.lists.filter(
      (list) => list.id === Number(listId)
    )[0];
    //const shows = SHOWS.filter((show) => currentList.list.includes(show.id));
    const shows = currentList.list.map(
      (id) => SHOWS.filter((show) => show.id === id)[0]
    );

    function removeShow(listId, showId) {
      dispatch(removeShowList(listId, showId));
    }

    function deleteList(listId) {
      dispatch(removeList(listId));
      history.push(`/myLists/${userLogged.id}/?save=delete`);
    }
    return (
      <React.Fragment>
        <div className="container mt-4">
          {save === "success" && <HelpAlert source="saveList" />}
          {save === "show" && <HelpAlert source="addShow" />}
          {save === "rank" && <HelpAlert source="rankList" />}

          <div className="row featured mb-3">
            <div className="col">
              <h1>
                <Button
                  variant="outline-primary"
                  onClick={handleShow}
                  size="lg"
                >
                  <i className="bi bi-list-stars"></i>
                </Button>{" "}
                My Lists{" "}
                {/* <Badge pill bg="primary">
                {myLists.length}
              </Badge> */}
              </h1>
            </div>
            <div className="col-2 text-truncate text-end">
              <h3>
                <Link
                  to=""
                  onClick={() => history.goBack()}
                  className="text-decoration-none"
                >
                  <i className="bi bi-backspace"></i> <h6>back</h6>
                </Link>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col featured mb-3 d-flex">
              <div className="me-auto align-self-center">
                <h3>
                  {currentList.name}
                  {/* <Badge pill bg="primary">
                  {currentList.list.length}
                </Badge> */}
                </h3>
              </div>
              <div className="align-self-center">
                {currentList.list.length > 0 && (
                  <React.Fragment>
                    <Link
                      to={`/recommendations/${listId}`}
                      className="btn btn-info btn-sm mt-2"
                    >
                      <i className="bi bi-stars"></i> Get recommendations
                    </Link>
                    <Link
                      to={`/rank/${listId}`}
                      className="btn btn-success btn-sm ms-2 mt-2"
                    >
                      <i className="bi bi-list-stars"></i> Let's Rank
                    </Link>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            {currentList.list.length < 1 && (
              <div>
                <h4>This list is empty.</h4>
                <h6>Time to add some shows!</h6>
              </div>
            )}

            {/* render */}
            {shows.map((show) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3"
                key={show.id}
              >
                <div className="card shadow h-100">
                  <Link
                    to={`/show/${show.id}`}
                    className="text-decoration-none"
                  >
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
                  <div className="card-footer text-center d-flex justify-content-center">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeShow(currentList.id, show.id)}
                    >
                      <i className="bi bi-x-square"></i> Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* render */}
          </div>
          <Offcanvas show={showLists} onHide={handleClose}>
            {save === "delete" && <HelpAlert source="deleteList" />}
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
                    key={list.id}
                    onClick={handleClose}
                    to={`/myLists/${props.userId}/${list.id}`}
                    className="text-decoration-none"
                  >
                    <ListGroup.Item
                      active={Boolean(
                        list.id === Number(listId) ? true : false
                      )}
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
              {currentList.list.length > 0 && (
                <Link
                  to={`/recommendations/${listId}`}
                  className="btn btn-info btn-lg"
                >
                  <i className="bi bi-stars"></i> Get recommendations
                </Link>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div className="container mt-4">
          <div className="row">
            <div className="col d-flex justify-content-end">
              <Button
                variant="danger"
                onClick={() => deleteList(currentList.id)}
              >
                <i className="bi bi-x-square"></i> Delete List
              </Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return (
    <div className="container mt-4">
      {save === "delete" && <HelpAlert source="deleteList" />}
      <div className="row featured mb-3">
        <div className="col">
          <h1>No lists created.</h1>
        </div>
      </div>
    </div>
  );
}

export default MyLists;

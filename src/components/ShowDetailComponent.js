import { Badge, Form, InputGroup, Button } from "react-bootstrap";
import React from "react";
import { SHOWS } from "../shared/shows";
// import { LISTS } from "../shared/lists";
import { useSelector } from "react-redux";

import { Link, useHistory } from "react-router-dom";

function ShowDetail(props) {
  const lists = useSelector((state) => state.lists);
  const myLists = lists.lists.filter((list) => list.user === "Let's Rank");
  console.log(myLists);

  const show = SHOWS.filter((elem) => elem.id === props.showId)[0];
  const history = useHistory();
  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col-12 col-md-4 mb-3">
          <img
            src={show.image.original}
            className="img-thumbnail shadow"
            alt="..."
          />
        </div>
        <div className="col">
          <div className="container">
            <div className="row featured">
              <div className="col-11">
                <h1 className="">{show.name}</h1>
              </div>
              <div className="col-1">
                <h3 className="">
                  <Link to="" onClick={() => history.goBack()}>
                    <i className="bi bi-backspace"></i>
                  </Link>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>
                  {show.summary
                    ? show.summary.replace(/<[^>]*>?/gm, "")
                    : "We don't have a summary for this show yet."}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>
                  <strong>Official site: </strong>
                  <a href={show.officialSite} target="_blank" rel="noreferrer">
                    {show.officialSite ? show.officialSite : "N/A"}
                  </a>
                </p>
                <p>
                  <strong>Genres: </strong>{" "}
                  {show.genres.map((genre, index, array) =>
                    index + 1 === array.length ? `${genre}` : `${genre} | `
                  )}
                </p>
                <p>
                  <strong>Language: </strong>
                  {show.language}
                </p>
                <p>
                  <strong>Web channel: </strong>
                  {show.webChannel ? show.webChannel.name : "N/A"}
                </p>
                <p>
                  <strong>Network: </strong>
                  {show.network ? show.network.name : "N/A"}
                </p>
                <p>
                  <strong>Premiered: </strong>
                  {show.premiered}
                </p>
                <p>
                  <strong>Status: </strong>
                  <Badge bg={show.status === "Ended" ? "danger" : "success"}>
                    {show.status}
                  </Badge>
                </p>
                <p>
                  <strong>Included in: </strong>
                  <Badge bg="primary">
                    {
                      lists.lists.filter((list) => list.list.includes(show.id))
                        .length
                    }{" "}
                    Public Lists
                  </Badge>{" "}
                  {/* <Badge bg="primary">
                    {LISTS.filter((list) => list.list.includes(show.id)).length}{" "}
                    Own Lists
                  </Badge> */}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-10 col-lg-8">
                <Form>
                  <Form.Group>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="addToList">
                        <i className="bi bi-plus-square"></i>
                      </InputGroup.Text>
                      <Form.Select>
                        <option value="-1">Select List</option>
                        {myLists.map((list) => (
                          <option
                            key={list.id}
                            value={list.id}
                            disabled={list.list.includes(show.id)}
                          >
                            {list.name}
                          </option>
                        ))}
                      </Form.Select>
                      <Button variant="primary">Add to List</Button>
                      <Button variant="success" className="ms-1">
                        Create List
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetail;

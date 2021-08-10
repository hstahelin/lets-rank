import React from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { SHOWS } from "../shared/shows";
import Match from "./MatchComponent";

function ListCardPreview(props) {
  const showList = SHOWS.filter((show) => props.list.list.includes(show.id));
  return (
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <Card className="shadow">
        <Card.Header className="pb-0">
          <h5 className="fw-bold text-truncate">{props.list.name}</h5>
          <Link
            to={`/user/${props.list.user}`}
            className="text-decoration-none"
          >
            <p className="fs-6 mb-0 text-end">by {props.list.user}</p>
          </Link>
        </Card.Header>
        <Card.Body className="m-0 p-0">
          <div className="row m-0 p-0">
            <div className="col m-0 p-0">
              <Link to={`/show/${showList[0].id}`}>
                <img
                  src={showList[0].image.medium}
                  className="d-block w-100"
                  alt="..."
                />
              </Link>
              <Link to={`/show/${showList[2].id}`}>
                <img
                  src={showList[2].image.medium}
                  className="d-block w-100"
                  alt="..."
                />
              </Link>
            </div>
            <div className="col m-0 p-0">
              <Link to={`/show/${showList[1].id}`}>
                <img
                  src={showList[1].image.medium}
                  className="d-block w-100"
                  alt="...."
                />
              </Link>

              <Link to={`/show/${showList[3].id}`}>
                <img
                  src={showList[3].image.medium}
                  className="d-block w-100"
                  alt="..."
                />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <div>
                {props.source === "recommendation" ? (
                  <Match match={props.list.match} />
                ) : (
                  ""
                )}
              </div>
              <Accordion flush>
                <Accordion.Item eventKey={props.list.id}>
                  <Accordion.Header>Preview</Accordion.Header>
                  <Accordion.Body className="px-0">
                    <ListGroup variant="flush">
                      {showList.map((show) => (
                        <ListGroup.Item
                          key={show.id}
                          as={Link}
                          to={`/show/${show.id}`}
                          action
                        >
                          {show.name}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-evenly">
          <Link to={`/list/${props.list.id}`} className="text-decoration-none">
            <i className="bi bi-card-list"></i> Details
          </Link>
          <i className="bi bi-plus-square text-danger"></i>
          <p className="m-0 p-0 text-danger">Save List</p>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ListCardPreview;

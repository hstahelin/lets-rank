import React from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { SHOWS } from "../shared/shows";

function ListCardPreview(props) {
  const showList = SHOWS.filter((show) => props.list.list.includes(show.id));
  //console.table("FILTERED List: " + JSON.stringify(showList));
  return (
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <Card className="shadow">
        <Card.Header className="pb-0">
          <h5 className="fw-bold">{props.list.name}</h5>
          <p className="fs-6 mb-0 text-end">by {props.list.user}</p>
        </Card.Header>
        <Card.Body className="m-0 p-0">
          <div className="row m-0 p-0">
            <div className="col m-0 p-0">
              <img
                src={showList[0].image.medium}
                className="d-block w-100"
                alt="..."
              />
              <img
                src={showList[2].image.medium}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="col m-0 p-0">
              <img
                src={showList[1].image.medium}
                className="d-block w-100"
                alt="...."
              />
              <img
                src={showList[3].image.medium}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <div className="row">
            <div className="col ">
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
          <i className="bi bi-card-list"></i>
          Details
          <i className="bi bi-plus-square"></i>
          Save List
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ListCardPreview;

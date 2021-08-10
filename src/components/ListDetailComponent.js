import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { SHOWS } from "../shared/shows";
import { LISTS } from "../shared/lists";

function ListDetail(props) {
  const currentList = LISTS.filter(
    (list) => list.id === Number(props.listId)
  )[0];
  const shows = SHOWS.filter((show) => currentList.list.includes(show.id));
  return (
    <div className="container mt-4">
      <div className="row featured mb-3">
        <div className="col d-flex">
          <div className="me-auto align-self-center">
            <h1>
              {currentList.name}{" "}
              <Badge pill bg="primary">
                {currentList.list.length}
              </Badge>
            </h1>
            <h6>by {currentList.user}</h6>
          </div>
          <div className="align-self-center">
            <button className="btn btn-danger" disabled>
              <i className="bi bi-plus-square"></i> Save List
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        {shows.map((show) => (
          <div key={show.id} className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
            <div className="card shadow h-100">
              <Link
                to={`/show/${show.id}`}
                className="text-decoration-none d-block"
              >
                <h5 className="card-header text-truncate">{show.name}</h5>
              </Link>
              <div className="card-img-top">
                <div className="row m-0 p-0">
                  <div className="col m-0 p-0">
                    <Link
                      to={`/show/${show.id}`}
                      className="text-decoration-none d-block"
                    >
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
                <p className="card-genre text-center pt-2">
                  {show.genres.map((genre, index, array) =>
                    index + 1 === array.length ? `${genre}` : `${genre} | `
                  )}
                </p>
              </div>
              <div className="card-footer">
                <Link
                  to={`/show/${show.id}`}
                  className="text-decoration-none d-block"
                >
                  <i className="bi bi-card-list"></i> Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListDetail;

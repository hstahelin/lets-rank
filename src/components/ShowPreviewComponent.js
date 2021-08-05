import React from "react";
import { Link } from "react-router-dom";
import { SHOWS } from "../shared/shows";

function ShowPreview(props) {
  const show = SHOWS.filter((elem) => elem.id === +props.showId)[0];
  return (
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div className="card h-100 shadow">
        <Link to={`/show/${show.id}`} className="text-decoration-none">
          <h5 className="card-header fw-bold text-truncate ">{show.name}</h5>
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
          <div className="card-title px-1 m-0 py-1 text-center">
            {show.genres.map((genre, index, array) =>
              index + 1 === array.length ? `${genre}` : `${genre} | `
            )}
          </div>
        </div>
        <div className="card-footer d-flex justify-content-evenly">
          <Link
            to={`/show/${show.id}`}
            className="text-decoration-none text-nowrap"
          >
            <i className="bi bi-card-list"></i> Details
          </Link>
          <i className="bi bi-plus-square"></i> Add to list
        </div>
      </div>
    </div>
  );
}

export default ShowPreview;

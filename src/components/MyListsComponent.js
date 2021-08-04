import React from "react";
import { Link } from "react-router-dom";
import { SHOWS } from "../shared/shows";
import { LISTS } from "../shared/lists";

function MyLists(props) {
  //const myLists = LISTS.filter((list) => list.user === props.username);
  const listId = props.listId ? props.listId : 0;
  const currentList = LISTS.filter((list) => list.id === Number(listId))[0];
  const shows = SHOWS.filter((show) => currentList.list.includes(show.id));
  return (
    <div className="container mt-4">
      <div className="row featured mb-3">
        <div className="col">
          <h1>
            <button
              className="btn btn-outline-primary btn-lg"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i className="bi bi-list"></i>
            </button>{" "}
            {props.username} Lists
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
                  {show.genres.map((genre) => `${genre} | `)}
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
    </div>
  );
}

export default MyLists;

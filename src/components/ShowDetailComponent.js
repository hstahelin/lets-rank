import { Badge } from "react-bootstrap";
import React from "react";
import { SHOWS } from "../shared/shows";
import { LISTS } from "../shared/lists";

function ShowDetail(props) {
  const show = SHOWS.filter((elem) => elem.id === props.showId)[0];
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
              <div className="col-12">
                <h1 className="">{show.name}</h1>
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
                    {LISTS.filter((list) => list.list.includes(show.id)).length}{" "}
                    Public Lists
                  </Badge>{" "}
                  <Badge bg="primary">
                    {LISTS.filter((list) => list.list.includes(show.id)).length}{" "}
                    Own Lists
                  </Badge>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-10 col-lg-8">
                <form action="">
                  <div className="input-group">
                    <span
                      className="input-group-text searchBar bi bi-plus-square"
                      id="basic-addon1"
                    ></span>
                    <select
                      className="form-select"
                      id="floatingSelect"
                      name="listOption"
                    >
                      <option selected>Select List</option>
                      <option value="1" disabled>
                        Top 10 Action
                      </option>
                      <option value="2">Top 10 Kids</option>
                      <option value="3">Best Science-Fiction</option>
                      <option value="4">Top 10 Horror</option>
                      <option value="5">All Time Best</option>
                    </select>
                    <button type="submit" className="btn btn-primary">
                      Add to List
                    </button>
                    <button type="button" className="btn btn-success ms-1">
                      Create List
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetail;

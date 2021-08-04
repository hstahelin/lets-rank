import React from "react";
import { SHOWS } from "../shared/shows";

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
                <p>{show.summary.replace(/<[^>]*>?/gm, "")}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>
                  <strong>Genres: </strong>{" "}
                  {show.genres.map((genre) => `${genre} | `)}
                </p>

                <p>
                  <strong>Web channel: </strong>
                  {show.webChannel ? show.webChannel.name : "N/A"}
                </p>
                <p>
                  <strong>Premiered: </strong>
                  {show.premiered}
                </p>
                <p>
                  <strong>Official site: </strong>
                  <a href={show.officialSite} target="_blank" rel="noreferrer">
                    {show.officialSite}
                  </a>
                </p>
                <p>
                  <strong>Source: </strong>
                  <a href={show.url} target="_blank" rel="noreferrer">
                    TV Maze
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetail;

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { SHOWS } from "../shared/shows";

import ShowPreview from "./ShowPreviewComponent";

function Searchresults(props) {
  const history = useHistory();
  const filterShows = SHOWS.filter((show) =>
    show.name.toLowerCase().includes(props.searchText.toLowerCase())
  );
  return (
    <div className="container mt-4">
      <div className="row featured mb-3">
        <div className="col">
          <h1>Search Results</h1>
          for {props.searchText}
        </div>
        <div className="col-1">
          <h3>
            <Link to="" onClick={() => history.goBack()}>
              <i className="bi bi-backspace"></i>
            </Link>
          </h3>
        </div>
      </div>

      <div className="row">
        {filterShows.map(
          (show) =>
            props.searchText.length >= 3 && (
              <ShowPreview key={show.id} showId={show.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Searchresults;

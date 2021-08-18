import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { SHOWS } from "../shared/shows";

import ListCardPreview from "./ListCardPreviewComponent";
import { map } from "bluebird";

function Included(props) {
  const lists = useSelector((state) => state.lists);
  const history = useHistory();
  const show = SHOWS.filter((elem) => elem.id === +props.showId)[0];
  const includedLists = lists.lists.filter((list) =>
    list.list.includes(show.id)
  );

  return (
    <div className="container mt-4">
      <div className="row featured mb-3">
        <div className="col">
          <h1>{show.name} included in</h1>
        </div>
        <div className="col-2 col-md-1 text-truncate">
          <h3>
            <Link
              to="#"
              //   onClick={() => history.goBack()}
              className="text-decoration-none"
            >
              <i className="bi bi-backspace"></i> <h6>back</h6>
            </Link>
          </h3>
        </div>
      </div>
      <div className="row">
        {includedLists.map((list) => (
          <ListCardPreview key={list.id} list={list.id} />
        ))}
      </div>
    </div>
  );
}

export default Included;

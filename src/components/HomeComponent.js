import React from "react";
import ListCardPreview from "./ListCardPreviewComponent";
import { LISTS } from "../shared/lists";
import ShowPreview from "./ShowPreviewComponent";

function Home(props) {
  return (
    <div>
      <div className="container mt-4">
        <div className="row featured mb-3">
          <div className="col">
            <h1 className="pageTitle">Featured Lists</h1>
          </div>
        </div>
        <div className="row">
          <ListCardPreview list={LISTS[6]} />
          <ListCardPreview list={LISTS[1]} />
          <ListCardPreview list={LISTS[4]} />
          <ListCardPreview list={LISTS[3]} />
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col featured mb-3">
            <h1>Trending Shows</h1>
          </div>
        </div>
        <div className="row">
          <ShowPreview showId="169" />
          <ShowPreview showId="82" />
          <ShowPreview showId="431" />
          <ShowPreview showId="83" />
        </div>
      </div>
    </div>
  );
}

export default Home;

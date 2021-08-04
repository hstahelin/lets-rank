import React from "react";
import ListCardPreview from "./ListCardPreviewComponent";
import { LISTS } from "../shared/lists";

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
          <ListCardPreview list={LISTS[0]} />
          <ListCardPreview list={LISTS[1]} />
          <ListCardPreview list={LISTS[2]} />
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
        <div className="row">Render Shows ...</div>
      </div>
    </div>
  );
}

export default Home;

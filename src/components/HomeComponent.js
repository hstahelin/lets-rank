import React from "react";
import ListCardPreview from "./ListCardPreviewComponent";
import ShowPreview from "./ShowPreviewComponent";
import HelpAlert from "./HelpAlertComponent";

function Home(props) {
  return (
    <div>
      <div className="container mt-4">
        <HelpAlert source="home" />
        <div className="row featured mb-3">
          <div className="col">
            <h1 className="pageTitle">Featured Lists</h1>
          </div>
        </div>
        <div className="row">
          <ListCardPreview list={0} source="home" />
          <ListCardPreview list={1} source="home" />
          <ListCardPreview list={7} source="home" />
          <ListCardPreview list={9} source="home" />
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
          <ShowPreview showId="1" />
          <ShowPreview showId="2" />
        </div>
      </div>
    </div>
  );
}

export default Home;

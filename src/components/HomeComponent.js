import React from "react";
import { useSelector } from "react-redux";
import ListCardPreview from "./ListCardPreviewComponent";
import ShowPreview from "./ShowPreviewComponent";
import HelpAlert from "./HelpAlertComponent";
import { SHOWS } from "../shared/shows";

function Home() {
  const lists = useSelector((state) => state.lists);

  const popular = SHOWS.map((show) => ({
    id: show.id,
    included: lists.lists
      .map((list) => list.list.filter((i) => i === show.id))
      .filter((e) => e.length > 0).length,
  }));

  popular.sort((a, b) => b.included - a.included).splice(12);

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
          <ListCardPreview list={2} source="home" />
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
          {popular.map((show) => (
            <ShowPreview key={show.id} showId={show.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { LISTS } from "../shared/lists";
import ListCardPreview from "./ListCardPreviewComponent";

function Recommendation(props) {
  const history = useHistory();

  const currentList = LISTS.filter(
    (list) => list.id === Number(props.listId)
  )[0];

  function getRecommendations(list) {
    console.dir(list.list);
    const filteredList = LISTS.filter((e) => e.id !== list.id).map((elem) => ({
      ...elem,
      match: elem.list.reduce(
        (acc, curr) => acc + (list.list.includes(curr) ? 1 : 0),
        0
      ),
    }));
    //console.dir(filteredList.sort((a, b) => b.match - a.match).slice(0, 4));

    return filteredList.sort((a, b) => b.match - a.match).slice(0, 8);
  }

  const recommendList = getRecommendations(currentList);

  return (
    <div className="container mt-4">
      <div className="row featured mb-3">
        <div className="col">
          <h1>
            <i className="bi bi-stars"></i>Recommended Lists
          </h1>
          <h6>for {currentList.name}</h6>
        </div>
        <div className="col-1">
          <h3>
            <Link onClick={() => history.goBack()}>
              <i class="bi bi-backspace"></i>
            </Link>
          </h3>
        </div>
      </div>
      <div className="row">
        {/* <!-- Recommended List - Best for Kids-->; */}
        {recommendList.map((list) => (
          <ListCardPreview
            key={list.id}
            list={list}
            source="recommendation"
            match={list.match}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommendation;

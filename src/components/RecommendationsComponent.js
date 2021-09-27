import React from "react";
import { Link, useHistory } from "react-router-dom";
// import { LISTS } from "../shared/lists";
import { useSelector } from "react-redux";

import ListCardPreview from "./ListCardPreviewComponent";

function Recommendation(props) {
  const lists = useSelector((state) => state.lists);

  const history = useHistory();

  const currentList = lists.lists.filter(
    (list) => list.id === Number(props.listId)
  )[0];

  function getRecommendations(list) {
    const filteredList = lists.lists
      .filter((e) => e.id !== list.id)
      .map((elem) => ({
        ...elem,
        match: elem.list.reduce(
          (acc, curr) => acc + (list.list.includes(curr) ? 1 : 0),
          0
        ),
      }));

    const topFilter = filteredList
      .sort(
        (a, b) =>
          b.match / currentList.list.length -
            a.match / currentList.list.length || b.list.length - a.list.length
      )
      .slice(0, 12);

    // console.log(topFilter);

    return topFilter;
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
        <div className="col-2 col-md-1 text-truncate">
          <h3>
            <Link
              to=""
              onClick={() => history.goBack()}
              className="text-decoration-none"
            >
              <i className="bi bi-backspace"></i> <h6>back</h6>
            </Link>
          </h3>
        </div>
      </div>
      <div className="row">
        {/* <!-- Recommended List - Best for Kids-->; */}
        {recommendList.map((list) => (
          <ListCardPreview
            key={list.id}
            list={list.id}
            match={5 * (list.match / currentList.list.length)}
            source="recommendation"
          />
        ))}
      </div>
    </div>
  );
}

export default Recommendation;

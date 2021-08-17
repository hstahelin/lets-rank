import React from "react";
// import { LISTS } from "../shared/lists";
import { useSelector } from "react-redux";

import ListCardPreview from "./ListCardPreviewComponent";

function UserInfo(props) {
  const lists = useSelector((state) => state.lists);

  const userLists = lists.lists.filter((list) => list.user === props.username);
  return (
    <div className="container mt-4">
      <div className="row featured mb-3">
        <div className="col">
          <h1>
            <i className="bi bi-person-badge"></i>
            {props.username} Lists
          </h1>
        </div>
      </div>
      <div className="row">
        {userLists.map((list) => (
          <ListCardPreview key={list.id} list={list.id} />
        ))}
      </div>
    </div>
  );
}

export default UserInfo;

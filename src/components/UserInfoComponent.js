import React from "react";
import { LISTS } from "../shared/lists";

import ListCardPreview from "./ListCardPreviewComponent";

function UserInfo(props) {
  const userLists = LISTS.filter((list) => list.user === props.username);
  return (
    <div class="container mt-4">
      <div class="row featured mb-3">
        <div class="col">
          <h1>
            <i className="bi bi-person-badge"></i>
            {props.username} Lists
          </h1>
        </div>
      </div>
      <div class="row">
        {userLists.map((list) => (
          <ListCardPreview list={list} />
        ))}
      </div>
    </div>
  );
}

export default UserInfo;

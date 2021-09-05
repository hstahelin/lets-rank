import React from "react";
import { USERS } from "../shared/users";

import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import history from "../history";

import ListCardPreview from "./ListCardPreviewComponent";

function UserInfo(props) {
  const lists = useSelector((state) => state.lists);
  const userLogged = useSelector((state) => state.user);

  let location = useLocation();
  const own = new URLSearchParams(location.search).get("own");

  const userLists = lists.lists.filter((list) => list.userId === +props.userId);

  const username = USERS.find((user) => user.id === +props.userId).username;

  return (
    <div className="container mt-4">
      {own === "true" && (
        <div className="row featured mb-3">
          <div className="col-4">
            <div className="card">
              <div className="card-header">User Info</div>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                  Username : {userLogged.username}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Name : {`${userLogged.firstName} ${userLogged.lastName}`}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Email : {userLogged.email}
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="row featured mb-3">
        <div className="col">
          <h2>
            <i className="bi bi-person-badge"></i>
            {username} Lists
          </h2>
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
        {userLists.map((list) => (
          <ListCardPreview key={list.id} list={list.id} />
        ))}
      </div>
    </div>
  );
}

export default UserInfo;

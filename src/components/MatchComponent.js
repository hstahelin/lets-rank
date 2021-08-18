import React from "react";

function Match(props) {
  const { match } = props;
  const full = Math.floor(match);
  const half = Math.ceil(match % 1);
  const left = 5 - (full + half);

  if (match === 0) {
    return (
      <div className="rank text-end mt-2 pe-2">
        No match :{" "}
        {[...Array(5)].map((star, i) => (
          <i className="bi bi-star rank" key={i}></i>
        ))}
      </div>
    );
  } else {
    return (
      <div className="rank text-end mt-2 pe-2">
        Match :{" "}
        {[...Array(full)].map((star, i) => (
          <i className="bi bi-star-fill rank" key={i}></i>
        ))}
        {half === 1 ? <i className="bi bi-star-half"></i> : ""}
        {[...Array(left)].map((star, i) => (
          <i className="bi bi-star rank" key={i}></i>
        ))}
      </div>
    );
  }
}

export default Match;

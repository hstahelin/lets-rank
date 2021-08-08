import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="p-3 site-footer mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 text-start">
            <Link
              to="/home"
              className="text-decoration-none border-end border-info px-2 text-nowrap"
            >
              <i className="bi bi-house"></i> Home
            </Link>
            <Link
              to="/myLists/Let's Rank"
              className="text-decoration-none border-end border-info px-2 text-nowrap"
            >
              <i className="bi bi-list-ul"></i> My List
            </Link>
            <Link to="/about" className="text-decoration-none px-2 text-nowrap">
              <i className="bi bi-question"></i> Help
            </Link>
          </div>
          <div className="col text-end">
            <p className="fs-6 text-nowrap">
              Copyright &copy; 2021 <strong>Let's Rank</strong>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col text-end">
            <p className="small">
              Powered by{" "}
              <a
                href="https://www.tvmaze.com/api"
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                TVMAZE
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

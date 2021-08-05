import React from "react";

function ListDetail(props) {
  return (
    <div className="container mt-4">
      <div className="row featured mb-3">
        <div className="col d-flex">
          <div className="me-auto align-self-center">
            <h1>Top 10 Kids</h1>
            <h6> by IMDB</h6>
          </div>
          <div className="align-self-center">
            <a href="myLists.html" className="btn btn-info">
              <i className="bi bi-plus-square"></i> Save List
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
          <div className="card shadow h-100">
            <h5 className="card-header text-truncate">LEGO Masters</h5>
            <div className="card-img-top">
              <div className="row m-0 p-0">
                <div className="col m-0 p-0">
                  <img
                    src="https://static.tvmaze.com/uploads/images/original_untouched/232/580561.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="card-body p-0 m-0">
              <p className="card-genre text-center pt-2">
                Game Show | Children
              </p>
            </div>
            <div className="card-footer">
              <a href="showDetail.html" class="text-decoration-none d-block">
                <i className="bi bi-card-list"></i> Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListDetail;

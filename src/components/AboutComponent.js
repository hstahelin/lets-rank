import React from "react";

function About() {
  return (
    <div className="container mt-4">
      <div className="row featured mb-3">
        <div className="col">
          <h1>
            How it works<i className="bi bi-question-lg"></i>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h5>
            <strong>Let's Rank</strong> allows you to create ranked lists of TV
            Shows and get recommendations based on other people's lists that
            match your picks.
          </h5>
        </div>
        <div className="col-12">
          <h5>
            <strong>Let's Rank</strong> is ideal if you're looking for a more
            personal recommendation, instead of just browsing through a list of
            the most popular shows.
          </h5>
        </div>
        <div className="col mt-3">
          <p className="fst-italic">
            <strong>E.g.</strong> Create a list with your favorite comedies, we
            will recommend other lists similar to your picks, so you can find
            the next great comedy that matches your taste!
          </p>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-12 col-lg-10">
          <h4 className="fw-bold">
            HOW<i className="bi bi-question-lg"></i>
          </h4>
          <ol className="list-group list-group-flush list-group-numbered">
            <li className="list-group-item">
              Create an empty List, give it a name, short description and add
              some TV genres, based on your preferences.
            </li>
            <li className="list-group-item">
              Search for your favorite TV Show.
            </li>
            <li className="list-group-item">Add that TV Show to your List.</li>
            <li className="list-group-item">
              Once you have between 5 - 10 shows on your list, hit the{" "}
              <strong>
                <i className="bi bi-stars"></i>Get Recommendations
              </strong>{" "}
              option.
            </li>
            <li className="list-group-item">
              A sorted list of recommended lists, from other users will show.
            </li>
            <li className="list-group-item">
              Explore the lists, find that new show to watch!
            </li>
          </ol>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 mt-5">
          <p className="fst-italic fw-lighter text-end">
            <small>
              Artificial intelligence isn't as intelligent as you'd like it to
              be. Nothing beats asking a human!
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

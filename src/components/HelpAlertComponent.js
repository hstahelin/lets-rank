import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function HelpAlert(props) {
  const [showAlert, setShowAlert] = useState(true);
  if (showAlert && props.source === "home") {
    return (
      <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
        <Link to="/about" className="text-decoration-none">
          <i className="bi bi-question-circle"></i> First time here? Read our
          guide and learn how <strong>Let's Rank</strong> works!
        </Link>
      </Alert>
    );
  }
  if (showAlert && props.source === "saveList") {
    return (
      <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        <h4>
          <i className="bi bi-check-circle"></i> SUCCESS!
        </h4>
        <p>Your list has been saved.</p>
      </Alert>
    );
  }
  if (showAlert && props.source === "addShow") {
    return (
      <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        <h4>
          <i className="bi bi-check-circle"></i> SUCCESS!
        </h4>
        <p>Your show has been added.</p>
      </Alert>
    );
  }
  if (showAlert && props.source === "deleteList") {
    return (
      <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        <h4>
          <i className="bi bi-check-circle"></i> SUCCESS!
        </h4>
        <p>Your list has been deleted.</p>
      </Alert>
    );
  }
  if (showAlert && props.source === "rankList") {
    return (
      <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        <h4>
          <i className="bi bi-check-circle"></i> SUCCESS!
        </h4>
        <p>Your list rank has been saved.</p>
      </Alert>
    );
  }
  return <div />;
}

export default HelpAlert;

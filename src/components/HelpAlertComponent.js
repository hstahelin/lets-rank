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
        <h4>SUCCESS!</h4>
        <p>Thg list has been saved.</p>
      </Alert>
    );
  }
  return <div />;
}

export default HelpAlert;

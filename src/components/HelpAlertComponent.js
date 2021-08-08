import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function HelpAlert() {
  const [showAlert, setShowAlert] = useState(true);
  if (showAlert) {
    return (
      <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
        <Link to="/about" className="text-decoration-none">
          <i className="bi bi-question-circle"></i> First time here? Read our
          guide and learn how <strong>Let's Rank</strong> works!
        </Link>
      </Alert>
    );
  }
  return <div />;
}

export default HelpAlert;

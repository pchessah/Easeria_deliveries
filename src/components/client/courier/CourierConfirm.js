import React from "react";
import { Alert } from "reactstrap";

function CourierConfirm() {
  return (
    <div>
      <Alert color="success">
        <h4 className="alert-heading">Success!</h4>
        <p>
          Your courier has accepted the order and will deliver the goods in the
          location.
        </p>
        <hr />
        <a href="/">
          <button> Go to Home Page </button>
        </a>
      </Alert>
    </div>
  );
}

export default CourierConfirm;

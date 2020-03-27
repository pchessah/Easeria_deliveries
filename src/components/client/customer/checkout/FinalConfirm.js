import React, { useState } from "react";
import { Jumbotron, Button, Fade } from "reactstrap";

function FinalConfirm(props) {
  const [fadeIn, setFadeIn] = useState(false);

  const toggle = () => setFadeIn(!fadeIn);
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Toggle Fade
      </Button>
      <Fade in={fadeIn} tag="h5" className="mt-3">
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </Fade>
    </div>
  );
}

export default FinalConfirm;

import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";

function DeliveryType() {
  return (
    <div>
      <CardGroup style={{ textAlign: "center" }}>
        <Card>
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>MotorCycle</CardTitle>
            <CardSubtitle style={{ fontWeight: "900" }}>
              Price: KSH 100
            </CardSubtitle>

            <CardImg
              top
              height="250px"
              width="100%"
              src="https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Card image cap"
            />
            <Button
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                padding: "10px",
                width: "100%"
              }}
              color="primary"
            >
              Select
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Foot Courier</CardTitle>
            <CardSubtitle style={{ fontWeight: "900" }}>
              Price: KSH 70
            </CardSubtitle>
            <CardImg
              top
              width="100%"
              height="250px"
              src="https://images.pexels.com/photos/1466852/pexels-photo-1466852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Card image cap"
            />

            <Button
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "10px",
                width: "100%"
              }}
              color="primary"
            >
              Select
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Pick Up</CardTitle>
            <CardSubtitle style={{ fontWeight: "900" }}>
              Price: KSH 200
            </CardSubtitle>
            <CardImg
              top
              height="250px"
              width="100%"
              src="https://images.pexels.com/photos/2994335/pexels-photo-2994335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Card image cap"
            />

            <Button
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "10px",
                width: "100%"
              }}
              color="primary"
            >
              Select
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default DeliveryType;

import React from "react";
import {
  Button,
  CardImg,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";
import { Card } from "react-bootstrap";

function DeliveryType() {
  const priceMotorcycle = JSON.parse(localStorage.getItem("priceMotorcycle"));
  const priceFoot = JSON.parse(localStorage.getItem("priceFoot"));
  const pricePick = JSON.parse(localStorage.getItem("pricePick"));
  return (
    <div>
      <CardGroup style={{ textAlign: "center" }}>
        <Card style={{borderRadius:"20px"}}>
          <CardBody>
            <Card.Header style={{backgroundColor: "#FFF9C9"}}>
              <CardTitle style={{ fontSize: "20px" }}>MotorCycle</CardTitle>
              <CardSubtitle style={{ fontWeight: "900" }}>
                Price: Ksh{priceMotorcycle}
              </CardSubtitle>
            </Card.Header>

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
        <Card style={{borderRadius:"20px"}}>
          <CardBody>
            <Card.Header style={{backgroundColor: "#FFF9C9"}}>
              <CardTitle style={{ fontSize: "20px" }}>Foot Courier</CardTitle>
              <CardSubtitle style={{ fontWeight: "900" }}>
                Price: KSH {priceFoot}
              </CardSubtitle>
            </Card.Header>
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
        <Card style={{borderRadius:"20px"}}>
          <CardBody>
            <Card.Header style={{backgroundColor: "#FFF9C9"}}>
              <CardTitle style={{ fontSize: "20px" }}>Pick Up</CardTitle>
              <CardSubtitle style={{ fontWeight: "900" }}>
                Price: KSH {pricePick}
              </CardSubtitle>
            </Card.Header>
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

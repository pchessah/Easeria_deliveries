import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";

import shopData from "../products/shops.json";

function Shop() {
  return (
    <div className="container">
      <div className="row">
        {shopData.map((value, indx) => {
          return (
            <CardGroup className="col-xm-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="product">
                <CardImg
                  top
                  width="100%"
                  src={value.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{value.location}</CardTitle>
                  <CardSubtitle>Ksh {value.price}</CardSubtitle>
                  <CardText>{value.description}</CardText>
                  <Button>Add to cart</Button>
                </CardBody>
              </Card>
            </CardGroup>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;

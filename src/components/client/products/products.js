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

import productData from "../products/products.json";

function Products() {
  return (
    <div className="container">
      <div className="row">
        {productData.map((value, indx) => {
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
                <CardTitle>{value.name}</CardTitle>
                <CardSubtitle>Ksh {value.price}</CardSubtitle>
                <CardText>
               {value.description}
                </CardText>
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

export default Products;

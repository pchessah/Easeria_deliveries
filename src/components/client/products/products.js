import React, { useState, useEffect } from "react";
import {
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";
import {Card} from 'react-bootstrap'
import { toast } from "react-toastify";
import productData from "../products/products.json";

function Products(props) {
  const [data, setData] = useState();

  useEffect(() => {
    setData(productData);
  }, []);

  const handleAddCart = indx => {
    const local = JSON.parse(localStorage.getItem("productData"));
    let theProduct = [indx];
    const { values } = Object;
    if (local === null || local.length === 0) {
      localStorage.setItem("productData", JSON.stringify(theProduct));
      return toast.success("Item added successfuly");
    } else {
      let arrItems = [];
      for (let i = 0; i < local.length; i++) {
        arrItems.push(values(local[i]).join(""));
      }
      if (arrItems.includes(values(indx).join(""))) {
        return toast.error("Cannot add item");
      } else {
        localStorage.setItem("productData", JSON.stringify([...local, indx]));
        return toast.success("Item added successfuly");
      }
    }
  };

  

  return (
    <div className="container">
      <div className="row">
        {data &&
          data.map((productValue, indx) => {
            return (
              <CardGroup
                className="col-xm-12 col-sm-6 col-md-4 col-lg-3"
                key={indx}
                style={{ marginTop: "10px" }}
              >
                <Card className="product">
                  <CardImg
                    className="photo"
                    top
                    width="100%"
                    src={productValue.image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <hr />
                    <Card.Header>
                      <CardTitle>{productValue.name}</CardTitle>
                      <CardSubtitle>Ksh {productValue.price}</CardSubtitle>
                      <CardText>{productValue.description}</CardText>
                    </Card.Header>
                    <hr />
                    <Button
                      style={{ width: "100%" }}
                      color="success"
                      onClick={() => handleAddCart(productValue)}
                    >
                      Add to cart
                    </Button>
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

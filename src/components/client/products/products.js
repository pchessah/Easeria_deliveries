import React, { useState, useEffect } from "react";
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

import { toast } from "react-toastify";

import productData from "../products/products.json";

function Products(props) {
  const initialCart = () => JSON.parse(localStorage.getItem("productData"));
  const [data, setData] = useState();
  const [cartProduct, setCartProduct] = useState([...initialCart]);

  useEffect(() => {
    setData(productData);
  }, []);

  console.log(initialCart());

  useEffect(() => {
    // set the browser stoarge with the cart products
    initialCart();
    const json = JSON.stringify(cartProduct);
    localStorage.setItem("productData", json);
  }, [cartProduct]);

  // useEffect(()=>{
  //     try {
  //       const json = localStorage.getItem("productData");
  //       const parsedData = JSON.parse(json);
  //       console.log(parsedData);

  //       if (parsedData) {
  //         setCartProduct(parsedData);
  //       }
  //     } catch (e) {
  //       console.log("Unable to pass data");
  //     }

  // },[])

  const handleAddCart = indx => {
    const local = JSON.parse(localStorage.getItem("productData"));
    const inputProduct = data[indx];
    console.log(local);
    if (local.length===0){
      console.log(cartProduct);
        setCartProduct([...cartProduct, data[indx]]);
        return toast.success("Item added successfuly");
    }
    for (let i = 0; i < local.length; i++) {
      const { values } = Object;
      if (values(inputProduct).join("")===values(local).join("")) {
        console.log("cannot send");
        return toast.error("Cannot add item");
      } else {
        console.log(cartProduct);
        setCartProduct([...cartProduct, data[indx]]);
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
              <CardGroup className="col-xm-12 col-sm-6 col-md-4 col-lg-3">
                <Card className="product">
                  <CardImg
                    className="photo"
                    top
                    width="100%"
                    src={productValue.image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{productValue.name}</CardTitle>
                    <CardSubtitle>Ksh {productValue.price}</CardSubtitle>
                    <CardText>{productValue.description}</CardText>
                    <br />
                    <Button onClick={() => handleAddCart(indx)}>
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

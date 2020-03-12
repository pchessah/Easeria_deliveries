import React, { useState } from "react";
import {
  UncontrolledCarousel,
  InputGroup,
  Button,
  Input,
  Card
} from "reactstrap";

import { places } from "./places";

const items = [
  {
    src:
      "https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    altText: "Slide 1",
    caption: "Get your goods fast!",
    header: "Easeria Deliveries",
    key: "1"
  },
  {
    src:
      "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    altText: "Slide 2",
    caption: "",
    header: "Affordable prices",
    key: "2"
  },
  {
    src:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    altText: "Slide 3",
    caption: "Great customer experience",
    header: "Trusted Vendors",
    key: "3"
  }
];

function Home(props) {
  
  const [price, setPrice]=useState(null)

  const handleCalculatePrice = (e) => {
   const distance = e.target.value
    if(distance<3){
      setPrice(50)
    }else if(distance>3){
      setPrice(Math.ceil(17*(distance-3) + 50)) 
    }
  };
console.log(price);
  
  // console.log(loc);

  return (
    <div>
      <Card
        style={{
          width: "300px",
          padding: "10px",
          position: "fixed",
          zIndex: "2",
          right: "5px"
        }}
      >
        <InputGroup>
          <Input type="select">
            <option>LakeHub, Okore Road</option>
          </Input>
        </InputGroup>{" "}
        <br />
        <InputGroup>
          <Input type="select" onChange={handleCalculatePrice}>
            <option> Choose Destination </option>
            {places.map(({ name, distance }, i) => (
              <option key={i} value={distance}>
                {name}
              </option>
            ))}
          </Input>
        </InputGroup>
            <p>{price?`Estimated price: Ksh ${price}`:""}</p>
        <hr />
        <Button
          type="button"
          color="secondary"
          onClick={() => props.history.push("/deliveryType")}
        >
          Confirm Order
        </Button>
      </Card>

      <UncontrolledCarousel
        className="homeCarousel"
        style={{ height: "50vh" }}
        items={items}
      />
      <div className="row contain mx-auto">
        <a
          href="/food"
          className="col-md-3 categories  tint"
          style={{
            background:
              "url(https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
          }}
        >
          <div align="center">
            <h3>Food</h3>
          </div>
        </a>
        <a
          href="/drink"
          className="col-md-3 categories tint"
          style={{
            background:
              "url(https://images.pexels.com/photos/605408/pexels-photo-605408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
          }}
        >
          <div align="center">
            <h3>Drinks</h3>
          </div>
        </a>
        <a
          href="/others"
          className="col-md-3 categories tint"
          style={{
            background:
              "url(https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
          }}
        >
          <div align="center">
            <h3>Others</h3>
          </div>
        </a>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;

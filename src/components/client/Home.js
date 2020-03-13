import React, { useState } from "react";
import {
  UncontrolledCarousel,
  InputGroup,
  Button,
  Input,
  Card
} from "reactstrap";

import { places } from "./places";
import { MdDirectionsBike } from "react-icons/md";
import { FaWalking, FaTruckPickup } from "react-icons/fa";

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
  const [priceMotorCycle, setPriceMotorCycle] = useState(null);
  const [priceFoot, setPriceFoot] = useState(null);
  const [pricePick, setPricePick] = useState(null);


  const handleCalculatePrice = e => {
    const distance = e.target.value;
    let cash;
    let cashF;
    let cashP;
    if (distance < 3) {
      cash = 50;
      cashF = 40;
      cashP = 150;
      setPriceMotorCycle(cash);
      setPriceFoot(cashF)
      setPricePick(cashP)
      localStorage.setItem("priceMotorcycle", JSON.stringify(cash));
      localStorage.setItem("priceFoot", JSON.stringify(cashF));
      localStorage.setItem("pricePick", JSON.stringify(cashP));
    } else if (distance > 3) {
      cash = Math.ceil(17 * (distance - 3) + 50);
      cashF = Math.ceil(15 * (distance - 3) + 40);
      cashP = Math.ceil(50 * (distance - 3) + 150);
      setPriceMotorCycle(cash);
      setPriceFoot(cashF)
      setPricePick(cashP)
      localStorage.setItem("priceMotorcycle", JSON.stringify(cash));
      localStorage.setItem("priceFoot", JSON.stringify(cashF));
      localStorage.setItem("pricePick", JSON.stringify(cashP));
    }
  }; 

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
        <br/>
        Estimated prices (Ksh)
              <p>
                <MdDirectionsBike /> : {priceMotorCycle}
              </p>
              <p>
                <FaWalking /> : {priceFoot}
              </p>
              <p>
                <FaTruckPickup /> : {pricePick}
              </p>
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

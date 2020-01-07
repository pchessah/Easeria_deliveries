import React from "react";
import {UncontrolledCarousel} from 'reactstrap'

const items1 = [
  {
    src:
      "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    altText: "",
    caption: "",
    header: "",
    key: "1"
  }
];

function ShopHome() {
  return (
    <div>
      <UncontrolledCarousel
        className="homeCarousel"
        style={{ height: "30vh" }}
        items={items1}
      />
      <div className="row">
        <a
          href="/fooddrinkshop"
          className="col-md-3 categories category_left tint"
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
          href="/fooddrinkshop"
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
          href="/othersshop"
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
    </div>
  );
}

export default ShopHome;

import React from "react";

function SignupCustomer() {
  return (
    <div>
      <div className="split right">
        <div className="signupcentered signup">
          <h1> Sign Up </h1>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter Email..."
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Enter password..."
          />
          <input
            className="form-control"
            type="text"
            name="text"
            placeholder="Default delivery location..."
          />
          <input
            className="form-control"
            type="number"
            name="number"
            placeholder="Enter phone number..."
          />
          <button className="btn">Sign up</button>
          <p> Have an account? <a href ="/customerlogin"> Log in</a></p>
        </div>
      </div>
      <div className="split left">
        <div className="centered">
            <h1>Easeria Deliveries</h1>
            <img src ="https://d1yn1kh78jj1rr.cloudfront.net/image/preview/HxBuYgYlWj2s470fo/storyblocks-caucasian-female-delivery-courier-holding-box-on-the-background-of-truck-delivery-courier-carrying-cardboard-box-delivery-courier-with-box-in-hands-vector-flat-design-illustration-vertical-layout_HOKntzn3W_SB_PM.jpg" alt="company logo" />
            <p>Get access to the best food, drinks and other products from your favorite local establishments at your place of convenience and affordable prices!</p>
        </div>
      </div>
    </div>
  );
}

export default SignupCustomer;

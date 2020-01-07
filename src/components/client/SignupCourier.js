import React from 'react'

function SignupCourier() {
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
            placeholder="Vehicle Registration..."
          />
          <input
            className="form-control"
            type="number"
            name="number"
            placeholder="Enter ID number..."
          />
          <input
            className="form-control"
            type="number"
            name="number"
            placeholder="Enter phone number..."
          />
          <a href="/courierlogin"><button className="btn">Sign up</button></a>          
          <p> Have an account? <a href ="/courierlogin"> Log in</a></p>
        </div>
      </div>
      <div className="split left">
        <div className="centered">
            <h1>Easeria Deliveries</h1>
            <img src ="https://d1yn1kh78jj1rr.cloudfront.net/image/preview/HxBuYgYlWj2s470fo/storyblocks-caucasian-female-delivery-courier-holding-box-on-the-background-of-truck-delivery-courier-carrying-cardboard-box-delivery-courier-with-box-in-hands-vector-flat-design-illustration-vertical-layout_HOKntzn3W_SB_PM.jpg" alt="company logo" />
            <p>Get extra income delivering goods from shops and be your own boss in a flexible schedule of earning money!</p>
        </div>
      </div>
    </div>
        
    )
}

export default SignupCourier

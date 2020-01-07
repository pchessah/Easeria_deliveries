import React from 'react'

function LoginShopOwner() {
    return (
        <div>
      <div className="split right">
        <div className="signupcentered signup">
          <h1> Log In </h1>
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

          <button className="btn">Log In</button>
          <p> Don't have an account? <a href="/signupshopowner">Create Account</a>
          </p>
        </div>
      </div>
      <div className="split left">
        <div className="centered">
          <h1>Easeria Deliveries</h1>
          <img
            src="https://d1yn1kh78jj1rr.cloudfront.net/image/preview/HxBuYgYlWj2s470fo/storyblocks-caucasian-female-delivery-courier-holding-box-on-the-background-of-truck-delivery-courier-carrying-cardboard-box-delivery-courier-with-box-in-hands-vector-flat-design-illustration-vertical-layout_HOKntzn3W_SB_PM.jpg"
            alt="company logo"
          />
          <p>
          Reach out to new and a wide range of customers while getting increased profits in a larger market.
          </p>
        </div>
      </div>
    </div>
        
    )
}

export default LoginShopOwner

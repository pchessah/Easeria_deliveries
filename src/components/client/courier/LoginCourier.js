import React, { useState } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'

function LoginCourier({history}) {
  const [logins, setLogins] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setLogins({ ...logins, [name]: value });
  };

  async function handleSubmit(data) {
    const sendlogin = await axios.post("/login", logins);
    // console.log(sendlogin)
    let role = sendlogin.data.role
    if(role){
      localStorage.setItem("roles", JSON.stringify(role));

      history.push("/");
    }else{
      alert(sendlogin.data)
    }
   
  }
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
            onChange={handleChange}
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Enter password..."
            onChange={handleChange}
          />

          <button onClick={handleSubmit} type="submit" className="btn">
            Log In
          </button>
          <p>
            Don't have an account?
            <a href="/signupcourier">Create Account</a>
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
            Get extra income delivering goods from shops and be your own boss in
            a flexible schedule of earning money!
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginCourier;

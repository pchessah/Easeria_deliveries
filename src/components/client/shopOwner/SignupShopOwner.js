import React , {useState}from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


function SignupShopOwner() {
  const [inputs, setInputs] = useState({role:["shopOwner"]});
  const [response, setResponse] = useState(null);

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  function handleSubmit() {
    axios
      .post("/register", inputs)
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => console.log(err));
  }
  console.log(response);

  return (
    <div className="container">
      <div className="split right">
        <div className="signupcentered signup">
          <h1> Sign Up </h1>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter full name..."
          />
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter Email..."
          />
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter password..."
          />
          <input
            className="form-control"
            type="password"
            name="password2"
            onChange={handleChange}
            placeholder="Confirm password..."
          />
          <input
            className="form-control"
            type="text"
            name="shopName"
            onChange={handleChange}
            placeholder="Enter Shop Name..."
          />
          <input
            className="form-control"
            type="text"
            name="shopLocation"
            onChange={handleChange}
            placeholder="Enter Shop location..."
          />
          <input
            className="form-control"
            type="number"
            name="phone"
            onChange={handleChange}
            placeholder="Enter phone number..."
          />
          <Link to="/login">
          <button className="btn" onClick={handleSubmit}>Sign up</button>
          </Link>
          
          <p>Have an account?
            <a href="/login"> Log in</a>
          </p>
        </div>
      </div>
      <div className="split left">
        <div className="centered">
          <h1>Easeria Deliveries</h1>
          <img src="https://d1yn1kh78jj1rr.cloudfront.net/image/preview/HxBuYgYlWj2s470fo/storyblocks-caucasian-female-delivery-courier-holding-box-on-the-background-of-truck-delivery-courier-carrying-cardboard-box-delivery-courier-with-box-in-hands-vector-flat-design-illustration-vertical-layout_HOKntzn3W_SB_PM.jpg" alt="company logo" />
          <p>Reach out to new and a wide range of customers while getting increased profits in a larger market.</p>
        </div>
      </div>
    </div>

  );
}

export default SignupShopOwner;

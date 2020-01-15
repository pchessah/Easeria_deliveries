import React from 'react';


function Navbar2() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-yellow">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h2> Easeria Deliveries </h2>
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About Us
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/about">
              Log In/Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar2;

import React, { useState } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background-color: #ffe900;
    position: relative;
  }

  .nav-link {
    color: black !important;
    font-family: "IBM Plex Sans Condensed", sans-serif;
    position: relative !important;
    font-weight: bolder;
  }
`;

function NavigationBar() {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand>
          <div style={{display:"flex"}}>
            <h2 className="home-link">Easeria Deliveries </h2>
          
            <Button
              
              onClick={toggle}
              style={{
                width: "100%",
                marginTop: "5px",
                marginLeft: "6rem",
                marginBottom: "10px",
                backgroundColor: "#3A20B35"
              }}
            >
              Select Delivery Location
            </Button>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="navigation-bar-collapse"
          id="basic-navbar-nav"
        >
          <Nav className="ml-auto">
            <Nav.Item className="nav-item nav-link">
              <Link className="home-link" to="/">
                Home
              </Link>
            </Nav.Item>

            <Nav.Item className="nav-item nav-link">
              <Link className="home-link" to="/about">
                Join Us
              </Link>
            </Nav.Item>

            <Nav.Item className="nav-item nav-link">
              <Link className="home-link" to="/shophome">
                Shops
              </Link>
            </Nav.Item>

            <Nav.Item className="nav-item nav-link">
              <Link className="home-link" to="/food">
                Food
              </Link>
            </Nav.Item>

            <Nav.Item className="nav-item nav-link">
              <Link className="home-link" to="/drink">
                Drinks
              </Link>
            </Nav.Item>

            <Nav.Item className="nav-item nav-link">
              <Link className="home-link" to="/others">
                Others
              </Link>
            </Nav.Item>

            <Nav.Item className="nav-item nav-link">
              <Link className="home-link" to="/about">
                Log In/ Register
              </Link>
            </Nav.Item>

            <Nav.Item className="nav-item nav-link">
              <Link className="home-link" to="/cart">
                Cart
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;

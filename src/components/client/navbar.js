import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background-color: #ffe900;
    position:relative
  }

  .nav-link {
    color: black !important;
    font-family: "IBM Plex Sans Condensed", sans-serif;
    position: relative !important;
    font-weight: bolder;
  }
`;

function NavigationBar() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <h2 className="home-link">Easeria Deliveries </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navigation-bar-collapse" id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link">
                <Link className="home-link" to="/">
                  Home
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link">
                <Link className="home-link" to="/about">
                  Join Us
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link">
                <Link className="home-link" to="/shophome">
                  Shops
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link">
                <Link className="home-link" to="/food">
                  Food
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link">
                <Link className="home-link" to="/drink">
                  Drinks
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link">
                <Link className="home-link" to="/others">
                  Others
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link">
                <Link className="home-link" to="/about">
                  Log In/ Register
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item">
              <Nav.Link className="nav-link">
                <Link className="home-link" to="/cart">
                  Cart
                </Link>
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="footer nav-item">
      <MDBFooter className="footer nav-item">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <p>
                Easeria deliveries allows you to do your shopping from the
                comfort of your home and get goods delivered to your place of
                convinience
              </p>
            </MDBCol>
            <MDBCol md="6">
              <ul>
                <li className="nav-item">
                  <a href="#!">Shop</a>
                </li>
                <li className="nav-item">
                  <a href="#!">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="#!">Login/Register</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#!"> Easeria Deliveries </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;

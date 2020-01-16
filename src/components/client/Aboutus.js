import React from "react";
import {
  Jumbotron,
  Button,
  Card,
  CardImg,
  CardImgCard,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

const Example = props => (
  <div>
    <CardDeck>
      <Card style={{ border: "none" }} align="center">
        <CardBody>
          <CardTitle
            className="content-homepage"
            style={{ background: "#fedd3e" }}
          >
            Shop Owner
          </CardTitle>
          <CardSubtitle />
          <CardText className="card-text">
            Reach out to new and a wide range of customers while getting
            increased profits in a larger market.
          </CardText>
        </CardBody>
        <CardImg
          style={{ width: "70%", paddingBottom: "8%" }}
          top
          width="75%"
          src="https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Card image cap"
        />
        <a href="/signupshopowner">
          <Button style={{ width: "50%" }}>Become a Shop Owner</Button>
        </a>
        <a href="/login">
          <Button style={{ marginTop: "10px", width: "50%" }}>Log in</Button>
        </a>
      </Card>
      <Card style={{ border: "none" }} align="center">
        <CardBody>
          <CardTitle
            className="content-homepage"
            style={{ background: "#fedd3e" }}
          >
            Customer
          </CardTitle>
          <CardSubtitle />
          <CardText className="card-text">
            Get access to the best food, drinks and other products from your
            favorite local establishments at your place of convenience and
            affordable prices!
          </CardText>
        </CardBody>
        <CardImg
          style={{ width: "70%", paddingBottom: "8%" }}
          top
          width="100%"
          src="https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Card image cap"
        />
        <a href="/signupcustomer">
          <Button style={{ width: "50%" }}>Sign Up as a Customer</Button>
        </a>
        <a href="/login">
          <Button style={{ marginTop: "10px", width: "50%" }}>Log in</Button>
        </a>
      </Card>
      <Card style={{ border: "none" }} align="center">
        <CardBody>
          <CardTitle
            className="content-homepage"
            style={{ background: "#fedd3e" }}
          >
            Courier
          </CardTitle>
          <CardSubtitle />
          <CardText className="card-text">
            Get extra income delivering goods from shops and be your own boss in
            a flexible schedule of earning money!
          </CardText>
        </CardBody>
        <CardImg
          style={{ width: "50%", paddingBottom: "8%" }}
          top
          width="100%"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4sMtXmY3WThMaSgZa0PqNLgu7cuYSWjiBKlSQnvCkkRLlxMmXQ&s"
          alt="Card image cap"
        />
        <a href="/signupcourier">
          <Button style={{ width: "50%" }}>Be a Courier</Button>
        </a>
        <a href="/login">
          <Button style={{ marginTop: "10px", width: "50%" }}>Log in</Button>
        </a>
      </Card>
    </CardDeck>
  </div>
);

export default Example;

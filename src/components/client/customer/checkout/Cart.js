import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input,
  Card,
  Fade
} from "reactstrap";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(0)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

export default function Cart(props) {
  const { className } = props;
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const toggleTotal = () => setFadeIn(!fadeIn);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  const [cartItems, setItems] = useState([]);

  const defaultItems = [{ name: "No item selected", price: 0, quantity: 0 }];

  useEffect(() => {
    readItems();
  }, []);

  function readItems() {
    const cartData = JSON.parse(localStorage.getItem("productData"));
    if (cartData !== null) {
      setItems([...cartData]);
    } else {
      setItems([...defaultItems]);
    }
  }
  const handleAdd = item => {
    let cartProducts = JSON.parse(localStorage.productData);
    for (let i = 0; i < cartProducts.length; i++) {
      if (item.name === cartProducts[i].name) {
        //look for match with name
        cartProducts[i].quantity = Number(cartProducts[i].quantity) + 1; //add two
        break; //exit loop since you found the person
      }
    }
    localStorage.setItem("productData", JSON.stringify(cartProducts)); //put the object back
    return readItems();
  };

  const handleMinus = item => {
    let cartProducts = JSON.parse(localStorage.productData);
    console.log(cartProducts);
    for (let i = 0; i < cartProducts.length; i++) {
      if (item.name === cartProducts[i].name && cartProducts[i].quantity > 1) {
        //look for match with name
        cartProducts[i].quantity = Number(cartProducts[i].quantity) - 1; //add two
        break; //exit loop since you found the person
      }
    }
    localStorage.setItem("productData", JSON.stringify(cartProducts)); //put the object back
    return readItems();
  };

  let total = [];
  let cartTotal;
  const handleTotal = () => {
    if (localStorage.getItem("productData") === null) {
      cartTotal = 0;
    } else {
      let cartProducts = JSON.parse(localStorage.productData);
      for (let i = 0; i < cartProducts.length; i++) {
        total = [...total, cartProducts[i].quantity * cartProducts[i].price];
        cartTotal = total.reduce((current, item) => {
          return item + current;
        });
      }
    }

    return cartTotal;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Cart
            <Table className="cart container-fluid" hover responsive>
              <thead>
                <tr>
                  <th>Item description</th>
                  <th style={{ marginLeft: "18px" }}>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems &&
                  cartItems.map((item, i) => {
                    const { name, price, quantity } = item;
                    return (
                      <tr key={i}>
                        <td>{name}</td>
                        <td>
                          <Button
                            style={{ marginRight: "12px" }}
                            color="secondary"
                            onClick={() => handleAdd(item)}
                          >
                            +
                          </Button>
                          {quantity}
                          <Button
                            style={{ margin: "10px" }}
                            color="secondary"
                            onClick={() => handleMinus(item)}
                          >
                            -
                          </Button>
                        </td>

                        <td>{Number(price) * Number(quantity)}</td>
                      </tr>
                    );
                  })}

                <tr className="cartTotal">
                  <td>Cart Total</td>
                  <td> </td>
                  <td>{handleTotal()}</td>
                </tr>
              </tbody>
            </Table>
            <div className="cartButton">
              <Button color="warning">Shop More</Button>{" "}
              <Button color="success" onClick={toggleTotal}>
                Place Order
              </Button>{" "}              
              <Button color="danger">Cancel Order</Button>{" "}
              <Fade in={fadeIn} tag="h5" className="mt-3">
                <p style={{fontWeight: "900", fontSize:"25px"}}>Select delivery location Below </p>
              </Fade>
            </div>
          </Typography>
        </Paper>
        <Button color="primary" onClick={toggle} style={{width:"100%",marginTop:"-30px", marginBottom:"10px"}}>
          Select Delivery Location
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle} close={closeBtn}>
            Choose Delivery location and mode
          </ModalHeader>
          <ModalBody>
            <Card
              style={{
                padding: "10px",
                zIndex: "2"
              }}
            >
              <InputGroup>
                <Input placeholder="enter pickup location" />
              </InputGroup>{" "}
              <br />
              <InputGroup>
                <Input placeholder="enter destination location" />
              </InputGroup>
              <br />
              <InputGroup>
                <Input type="select">
                  <option>Select Mode of delivery</option>S
                  <option>Motorcycle</option>
                  <option>Foot Courier</option>
                  <option>Pick Up</option>
                </Input>
              </InputGroup>
              <br />
              <div>Your Total Price is : KSH 200</div>
              <hr />
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="success"
              onClick={() => props.history.push("/deliveryType")}
            >
              Confirm Order
            </Button>
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Copyright />
      </main>
    </React.Fragment>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Easeria Deliveries
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

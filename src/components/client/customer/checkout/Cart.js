import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Table, Button } from "reactstrap";

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
  const classes = useStyles();

  const [cartItems, setItems] = useState([]);
  
  const defaultItems = [{ name: "No item selected", price: 0 }];

  useEffect(() => {
    readItems()
  }, []);

  function readItems(){
    const cartData = JSON.parse(localStorage.getItem("productData"));
    if (cartData !== null) {
      setItems([...cartData]);
    } else {
      setItems([...defaultItems]);
    }
  }
  const handleAdd = (item) => {
    // let price = cartData.price
    // price+price
    let cartProducts = JSON.parse(localStorage.productData);
    for (let i = 0; i < cartProducts.length; i++) {
       if(item.name === cartProducts[i].name){  //look for match with name
        cartProducts[i].quantity= Number(cartProducts[i].quantity)+1 ;  //add two
           break;  //exit loop since you found the person
       }
    }
    localStorage.setItem("productData", JSON.stringify(cartProducts));  //put the object back
    return readItems()
  }

  const handleMinus = (item) => {
    let cartProducts = JSON.parse(localStorage.productData);
    for (let i = 0; i < cartProducts.length; i++) {
       if(item.name === cartProducts[i].name && cartProducts[i].quantity>1){  //look for match with name
        cartProducts[i].quantity= Number(cartProducts[i].quantity)-1 ;  //add two
           break;  //exit loop since you found the person
       }
    }
    localStorage.setItem("productData", JSON.stringify(cartProducts));  //put the object back
    return readItems()
  }



  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Cart
            <Table className="cart" hover responsive>
              <thead>
                <tr>
                  <th>Item description</th>
                  <th>Quantity</th>
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
                        <td>{quantity}<button type="button" onClick={()=>handleAdd(item)}>+</button><button onClick={()=>handleMinus(item)}>-</button></td>
                        <td>{Number(price)*Number(quantity)}</td>
                      </tr>
                    );
                  })}

                <tr className="cartTotal">
                  <td>Total</td>
                  <td>1</td>
                  <td>Ksh 250</td>
                </tr>
              </tbody>
            </Table>
            <div className="cartButton">
              <Button color="warning">Shop More</Button>{" "}
              <Button color="success">Place Order</Button>{" "}
              <Button color="danger">Cancel Order</Button>{" "}
            </div>
          </Typography>
        </Paper>
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

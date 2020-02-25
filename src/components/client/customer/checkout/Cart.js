import React, {useState, useEffect} from "react";
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
  useEffect(()=>{
    const cartData = JSON.parse(localStorage.getItem("productData"))
    setItems([...cartData])
  })
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
                {
                  cartItems && cartItems.map((item,i)=>{
                    const {name, price} = item;
                    return (
                      <tr key={i}>
                      <td>{name}</td>
                      <td>1</td>
                      <td>{price}</td>
                    </tr>
                    )
                  })
                }
               
                <tr className="cartTotal">
                  <td>Total</td>
                  <td>1</td>
                  <td>Ksh 250</td>
                </tr>
              </tbody>
            </Table>
            <div className="cartButton">
            <Button color="warning">Shop More</Button>{' '}
            <Button color="success">Place Order</Button>{' '}
            <Button color="danger">Cancel Order</Button>{' '}
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

import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { uniqBy } from "lodash";
import { rolesConfig } from "../config/roles";
import * as Routes from "./index";
import Navigation from "../components/client/admin/adminHeader";
// import NotFound from '../components/NotFound';
import { useStyles } from "../components/client/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const PrivateRoutes = props => {
  const [allowedRoutes, setAllowed] = useState([]);
  const [nav_links, setLinks] = useState();
  const shopOwner = [
    { name: "Edit Shop Details", link: "/app/shopDetails" },
    { name: "Add Product", link: "/app/addProduct" },
    { name: "Edit Product", link: "/app/editProduct" },
    { name: "Delete Product", link: "/app/deleteProduct" },
    { name: "Contact Admin", link: "/app/contactAdmin" },
    { name: "Contact Customer", link: "/app/contactCustomer" },
    { name: "Contact Courier", link: "/app/contactCourier" }
  ];
  const courier = [
    { name: "Edit Courier Details", link: "/app/courierDetails" },
    { name: "Contact Admin", link: "/app/contactAdmin" },
    { name: "Contact Customer", link: "/app/contactCustomer" },
    { name: "Contact ShopOwner", link: "/app/contactShopOwner" }
  ];
  const admin = [
    { name: "View Customer Details", link: "/app/customerDetails" },
    { name: "View Shop Owner Details", link: "/app/shopOwnerDetails" },
    { name: "View Courier Details", link: "/app/courierDetails" },
    { name: "Refund Customer", link: "/app/refundCustomer" },
    { name: "Contact Shop Owner", link: "/app/contactShopOwner" },
    { name: "Contact Customer", link: "/app/contactCustomer" },
    { name: "Contact Courier", link: "/app/contactCourier" }
  ];
  const customer = []
  const classes = useStyles();
  useEffect(() => {
    let roles = JSON.parse(localStorage.getItem("roles"));
    if (roles) {
      if (roles.join("") == "shopOwner") {
        setLinks(shopOwner);
      } else if (roles.join("") == "courier") {
        setLinks(courier);
      } else if (roles.join("") == "admin") {
        setLinks(admin);
      }
      roles = ["common", ...roles];

      let allowedRoutes = roles.reduce(
        (acc, role) => [...acc, ...rolesConfig[role].routes],
        []
      );

      // For removing duplicate entries, compare with 'url'.
      allowedRoutes = uniqBy(allowedRoutes, "url");
      setAllowed([...allowedRoutes]);
    } else {
      props.history.push("/");
    }
  }, [props.history]);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation sideLinks={nav_links} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          {allowedRoutes.map(route => (
            <Route
              exact
              key={route.url}
              component={Routes[route.component]}
              path={`${props.match.path}${route.url}`}
            />
          ))}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </main>
    </div>
  );
};

export default PrivateRoutes;

import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { loginCourier } from ".";
import Aboutus from "../components/client/Aboutus";
import Drink from "../components/client/products/Drink";
import Food from "../components/client/products/Food";
import FoodShop from "../components/client/products/Drink";
import Home from "../components/client/Home";
import Login from "../components/client/courier/LoginCourier";
import NavigationBar from "../components/client/navbar";
import Others from "../components/client/products/Others";
import OtherShops from "../components/client/products/OtherShops";
import ShopHome from "../components/client/products/ShopHome";
import AddressForm from "../components/client/customer/checkout/AddressForm";
import Checkout from "../components/client/customer/checkout/Checkout";
import PaymentForm from "../components/client/customer/checkout/PaymentForm";
import Review from "../components/client/customer/checkout/Review";
import Payment from "../components/client/customer/checkout/Payment";
import SignupCourier from "../components/client/courier/SignupCourier";
import SignupShopOwner from "../components/client/shopOwner/SignupShopOwner";
import SignupCustomer from "../components/client/customer/signupCustomer";
import ProductForm from "../components/client/shopOwner/ProductForm";
import Footer from "../components/client/Footer";
import CourierList from "../components/client/courier/CourierList";
import ContactCourier from "../components/client/courier/ContactCourier";
import CourierConfirm from "../components/client/courier/CourierConfirm";
import Cart from "../components/client/customer/checkout/Cart";

const PublicRoutes = ({ match }) => (
  <div>
    <NavigationBar />

    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/about" component={Aboutus} />
      <Route path="/shophome" component={ShopHome} />
      <Route path="/drink" component={Drink} />
      <Route path="/food" component={Food} />
      <Route path="/others" component={Others} />
      <Route path="/foodshop" component={FoodShop} />
      <Route path="/othershop" component={OtherShops} />
      <Route path="/login" component={loginCourier} />
      <Route exact path="/" component={Home} />
      <Route path="/address" component={AddressForm} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/paymentform" component={PaymentForm} />
      <Route path="/review" component={Review} />
      <Route path="/payment" component={Payment} />
      <Route path="/signupcourier" component={SignupCourier} />
      <Route path="/signupshopowner" component={SignupShopOwner} />
      <Route path="/signupcustomer" component={SignupCustomer} />
      <Route path="/courierList" component={CourierList} />
      <Route path="/courierConfirm" component={CourierConfirm} />
      <Route path="/cart" component={Cart}/>

      {/* <Route component={NotFound} /> */}
    </Switch>
    {/* <Footer/> */}
  </div>
);

export default PublicRoutes;

import React from 'react';
import './App.css';
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Shop from "./components/Shop";
import Drink from "./components/Drink";
import Others from "./components/Others";
import Navbar from "./components/navbar";
import Food from "./components/Food";
import SignupCustomer from "./components/signupCustomer";
import LoginCustomer from "./components/LoginCustomer"
import SignupShopOwner from './components/SignupShopOwner';
import LoginShopOwner from './components/LoginShopOwner';
import SignupCourier from './components/SignupCourier';
import LoginCourier from './components/LoginCourier';
import FoodShop from './components/FoodShop';
import OtherShops from './components/OtherShops';
import ShopHome from './components/ShopHome';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
          <Navbar />
      <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={Aboutus} />
            <Route path="/shop" component={ShopHome} />
            <Route path="/food" component={Food} />
            <Route path="/drink" component={Drink} />
            <Route path="/others" component={Others} />
            <Route path="/signupcustomer" component={SignupCustomer}/>
            <Route path="/customerlogin" component={LoginCustomer} />
            <Route path="/signupshopowner" component={SignupShopOwner}/>
            <Route path="/shopownerlogin" component={LoginShopOwner}/>
            <Route path="/signupcourier" component={SignupCourier}/>
            <Route path="/courierlogin" component={LoginCourier}/>
            <Route path="/fooddrinkshop" component={FoodShop}/>
            <Route path="/othersshop" component={OtherShops}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;



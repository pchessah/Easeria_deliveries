import React from 'react';
import './App.css';
import Home from "./components/client/Home";
import Aboutus from "./components/client/Aboutus";
import Shop from "./components/client/Shop";
import Drink from "./components/client/Drink";
import Others from "./components/client/Others";
import Navbar from "./components/client/navbar";
import Food from "./components/client/Food";
import SignupCustomer from "./components/client/signupCustomer";
import LoginCustomer from "./components/client/LoginCustomer"
import SignupShopOwner from './components/client/SignupShopOwner';
import LoginShopOwner from './components/client/LoginShopOwner';
import SignupCourier from './components/client/SignupCourier';
import LoginCourier from './components/client/LoginCourier';
import FoodShop from './components/client/FoodShop';
import OtherShops from './components/client/OtherShops';
import ShopHome from './components/client/ShopHome';
import ShopOwnerDashboard from './components/client/ShopOwnerDashboard';
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
            <Route path="/ownerdashboard" component={ShopOwnerDashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;



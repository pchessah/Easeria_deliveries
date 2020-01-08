import React from 'react';
import {
  Link, Route, Switch, Redirect,
} from 'react-router-dom';
import Login from '../components/client/LoginCourier';
import Home from '../components/client/Home';
import Aboutus from '../components/client/Aboutus'
import Navbar from '../components/client/navbar';
import ShopHome from '../components/client/ShopHome';
import Drink from '../components/client/Drink';
import Food from '../components/client/Food';
import Others from '../components/client/Others';
import FoodShop from '../components/client/FoodShop';
import OtherShops from '../components/client/OtherShops';
import { loginCourier } from '.';
// import NotFound from '../components/NotFound';

// const Register = () => (
// 	<JumbotronWrapper title="Register">
// 		<Link className="nav-link" to="/">
// 			Back to login
// 		</Link>
// 	</JumbotronWrapper>
// );
// const ForgotPassword = () => (
// 	<JumbotronWrapper title="ForgotPassword">
// 		<Link className="nav-link" to="/">
// 			Back to login
// 		</Link>
// 	</JumbotronWrapper>
// );

const PublicRoutes = ({ match }) => (
  <div>
    <Navbar />
    <Switch>
      {/* <Route path="/forgot-password" component={ForgotPassword} />
			<Route path="/register" component={Register} /> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={Aboutus} />
      <Route exact path="/shophome" component={ShopHome}/>
      <Route exact path="/drink" component={Drink}/>
      <Route exact path="/food" component={Food}/>
      <Route exact path="/others" component={Others}/>
      <Route exact path="/foodshop" component={FoodShop}/>
      <Route exact path="/othershop" component={OtherShops}/>
      <Route exact path="/login" component={loginCourier}/>
      <Route exact path="/" component={Home} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </div>
);

export default PublicRoutes;

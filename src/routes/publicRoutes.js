import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { loginCourier } from '.';
import Aboutus from '../components/client/Aboutus';
import Drink from '../components/client/products/Drink';
import Food from '../components/client/products/Food';
import FoodShop from '../components/client/products/Drink';
import Home from '../components/client/Home';
import Login from '../components/client/courier/LoginCourier';
import Navbar from '../components/client/navbar';
import Others from '../components/client/products/Others';
import OtherShops from '../components/client/products/OtherShops';
import ShopHome from '../components/client/products/ShopHome';
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

import React from 'react';
import Home from '../components/client/Home';
import Aboutus from '../components/client/Aboutus';
import Shop from '../components/client/Shop';
import Drink from '../components/client/Drink';
import Others from '../components/client/Others';
import Navbar from '../components/client/navbar';
import Food from '../components/client/Food';
import SignupCustomer from '../components/client/signupCustomer';
import LoginCustomer from '../components/client/LoginCustomer';
import SignupShopOwner from '../components/client/SignupShopOwner';
import LoginShopOwner from '../components/client/LoginShopOwner';
import SignupCourier from '../components/client/SignupCourier';
import LoginCourier from '../components/client/LoginCourier';
import FoodShop from '../components/client/FoodShop';
import OtherShops from '../components/client/OtherShops';
import ShopHome from '../components/client/ShopHome';
import ShopOwnerDashboard from '../components/client/ShopOwnerDashboard';
import Admin from '../components/client/Admin';
import ContactAdmin from '../components/client/ContactAdmin';
import ContactCourier from '../components/client/ContactCourier';
import ContactCustomer from '../components/client/ContactCustomer';
import ContactShopOwner from '../components/client/ContactShopOwner';
import CourierDashboard from '../components/client/CourierDashboard';


// Private routes.
const home = () => <Home />;
const aboutus = () => <Aboutus />;
const shop = () => <Shop />;
const drink = () => <Drink />;
const others = () => <Others />;
const navbar = () => <Navbar />;
const food = () => <Food />;
const signUpCustomer = () => <SignupCustomer />;
const loginCustomer = () => <LoginCustomer />;
const signUpShopOwner = () => <SignupShopOwner />;
const loginShopOwner = () => <LoginShopOwner />;
const signUpCourier = () => <SignupCourier />;
const loginCourier = () => <LoginCourier />;
const foodShop = () => <FoodShop />;
const otherShops = () => <OtherShops />;
const shopHome = () => <ShopHome />;
const shopOwnerDashboard = () => <ShopOwnerDashboard />;
const admin = () => <Admin />;
const contactAdmin = () => <ContactAdmin />;
const contactCourier = () => <ContactCourier />;
const contactCustomer = () => <ContactCustomer/>;
const courierDashboard= () => <CourierDashboard />;
const contactShopOwner = () => <ContactShopOwner />;

export {
  home,
  aboutus,
  shop,
  drink,
  others,
  navbar,
  food,
  shopHome,
  signUpCourier,
  signUpCustomer,
  signUpShopOwner,
  loginCourier,
  loginCustomer,
  loginShopOwner,
  foodShop,
  otherShops,
  shopOwnerDashboard,
  admin,
  contactShopOwner,
  courierDashboard,
  contactCustomer,
  contactCourier,
  contactAdmin
};

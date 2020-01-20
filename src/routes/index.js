import React from 'react';
import Home from '../components/client/Home';
import Aboutus from '../components/client/Aboutus';
import Shop from '../components/client/products/Shop';
import Drink from '../components/client/products/Drink';
import Others from '../components/client/products/Others';
import Navbar from '../components/client/navbar';
import Food from '../components/client/products/Food';
import SignupCustomer from '../components/client/customer/signupCustomer';
import SignupShopOwner from '../components/client/shopOwner/SignupShopOwner';
import SignupCourier from '../components/client/courier/SignupCourier';
import LoginCourier from '../components/client/courier/LoginCourier';
import FoodShop from '../components/client/products/FoodShop';
import OtherShops from '../components/client/products/OtherShops';
import ShopHome from '../components/client/products/ShopHome';
import ShopOwnerDashboard from '../components/client/shopOwner/ShopOwnerDashboard';
import Admin from '../components/client/admin/Admin';
import ContactAdmin from '../components/client/admin/ContactAdmin';
import ContactCourier from '../components/client/courier/ContactCourier';
import ContactCustomer from '../components/client/customer/ContactCustomer';
import ContactShopOwner from '../components/client/shopOwner/ContactShopOwner';
import CourierDashboard from '../components/client/courier/CourierDashboard';
import ProductForm from '../components/client/shopOwner/ProductForm'
import CourierList from '../components/client/courier/CourierList';


// Private routes.
const home = () => <Home />;
const aboutus = () => <Aboutus />;
const shop = () => <Shop />;
const drink = () => <Drink />;
const others = () => <Others />;
const navbar = () => <Navbar />;
const food = () => <Food />;
const signUpCustomer = () => <SignupCustomer />;
const signUpShopOwner = () => <SignupShopOwner />;
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
const productForm =()=> <ProductForm />;
const courierList =()=> <CourierList/>

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
  foodShop,
  otherShops,
  shopOwnerDashboard,
  admin,
  contactShopOwner,
  courierDashboard,
  contactCustomer,
  contactCourier,
  contactAdmin,
  productForm,
  courierList
};

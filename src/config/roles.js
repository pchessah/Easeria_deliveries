// component's config object.
const components = {
  loginCourier: {
    component: "loginCourier",
    url: "/logincourier",
    module: 1
  },
  shopOwnerDashboard: {
    component: "shopOwnerDashboard",
    url: "/shopownerdashboard",
    module: 1
  },
  courierDashboard: {
    component: "courierDashboard",
    url: "/courierdashboard",
    module: 1
  },
  Admin: {
    component: "admin",
    url: "/admin",
    module: 1
  },
  productForm: {
    component: "productForm",
    url: "/productForm",
    module: 1
  },
  drink:{    
      component: "drink",
      url: "/drink",
      module: 1
  },
  aboutus:{
    component: "aboutus",
        url: "/about",
        module: 1
  },
  food:{
    component: "food",
        url: "/food",
        module: 1
  },
  foodShop:{
    component: "foodShop",
        url: "/foodshop",
        module: 1
  },
  others:{
    component: "others",
        url: "/others",
        module: 1
  },
  shopHome:{
    component: "shopHome",
        url: "/shophome",
        module: 1
  },
  otherShops:{
    component: "otherShops",
        url: "/othershop",
        module: 1
  }
};

// modules for grouping.
const modules = {
  0: {
    title: "home",
    icon: "home",
    isExpendable: true
  }
};

// component's access to roles.
const {
  shop,
  drink,
  others,
  food,
  shopHome,
  loginCourier,
  foodShop,
  otherShops,
  shopOwnerDashboard,
  courierDashboard,
  admin,
  productForm
} = components;
const rolesConfig = {
  admin: {
    routes: [...Object.values(components)]
  },
  customer: {
    routes: [
      drink,
      others,
      foodShop,
      otherShops,
      food,
      shopHome
    ]
  },
  courier: {
    routes: [loginCourier, courierDashboard]
  },
  shopOwner: {
    routes: [shopOwnerDashboard, productForm]
  },
  common: {
    routes: [
      {
        component: "home",
        url: "/",
        module: 1
      },
      // {
      //   component: "aboutus",
      //   url: "/about",
      //   module: 1
      // },
      // {
      //   component: "drink",
      //   url: "/drink",
      //   module: 1
      // },
      // {
      //   component: "food",
      //   url: "/food",
      //   module: 1
      // },
      // {
      //   component: "foodShop",
      //   url: "/foodshop",
      //   module: 1
      // },
      // {
      //   component: "others",
      //   url: "/others",
      //   module: 1
      // },
      // {
      //   component: "otherShops",
      //   url: "/othershop",
      //   module: 1
      // },
      // {
      //   component: "shopHome",
      //   url: "/shophome",
      //   module: 1
      // },
      {
        component: "signUpCourier",
        url: "/signupcourier",
        module: 1
      },
      {
        component: "signUpShopOwner",
        url: "/signupshopowner",
        module: 1
      },
      {
        component: "signUpCustomer",
        url: "/signupcustomer",
        module: 1
      }
      // ,
      // {
      //   component: "productForm",
      //   url: "/productForm",
      //   module: 1
      // }
    ]
  }
};

export { modules, rolesConfig };

// component's config object.
const components = {
  home: {
    component: "home",
    url: "/",
    module: 1
  },
  availableOrders: {
    component: "availableOrders",
    url: "/availableOrders",
    module: 1
  },
  contactShopOwner: {
    component: "contactShopOwner",
    url: "/contactShopOwner",
    module: 1
  },
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
    url: "/addproduct",
    module: 1
  },
  contactCustomer: {
    component: "contactCustomer",
    url: "/contactCustomer",
    module: 1
  },
  contactAdmin: {
    component: "contactAdmin",
    url: "/contactAdmin",
    module: 1
  },
  contactCourier: {
    component: "contactCourier",
    url: "/contactCourier",
    module: 1
  },
  drink: {
    component: "drink",
    url: "/drink",
    module: 1
  },
  aboutus: {
    component: "aboutus",
    url: "/about",
    module: 1
  },
  food: {
    component: "food",
    url: "/food",
    module: 1
  },
  foodShop: {
    component: "foodShop",
    url: "/foodshop",
    module: 1
  },
  others: {
    component: "others",
    url: "/others",
    module: 1
  },
  shopHome: {
    component: "shopHome",
    url: "/shophome",
    module: 1
  },
  otherShops: {
    component: "otherShops",
    url: "/othershop",
    module: 1
  },
  courierList: {
    component: "courierList",
    url: "/courierList",
    module: 1
  },
  courierConfirm: {
    component: "courierConfirm",
    url: "/courierConfirm",
    module: 1
  },
  productList: {
    component: "productList",
    url: "/productList",
    module: 1
  },
  cart: {
    component: "cart",
    url: "/cart",
    module: 1
  },
  deliveryType: {
    component: "deliveryType",
    url: "/deliveryType",
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

  drink,
  others,
  food,
  shopHome,
  loginCourier,
  foodShop,
  otherShops,
  shopOwnerDashboard,
  courierDashboard,
  productForm,
  contactShopOwner,
  contactCourier,
  contactCustomer,
  contactAdmin,
  courierList,
  courierConfirm,
  productList,
  home,
  availableOrders,
  cart,
  deliveryType
} = components;
const rolesConfig = {
  admin: {
    routes: [...Object.values(components)]
  },
  customer: {
    routes: [
      // aboutus,
      home,
      drink,
      others,
      foodShop,
      otherShops,
      food,
      shopHome,
      contactShopOwner,
      contactCourier,
      contactAdmin,
      courierList,
      courierConfirm,
      cart,
      deliveryType
    ]
  },
  courier: {
    routes: [
      loginCourier,
      courierDashboard,
      contactShopOwner,
      contactAdmin,
      contactCustomer,
      availableOrders,
      deliveryType
    ]
  },
  shopOwner: {
    routes: [
      shopOwnerDashboard,
      productForm,
      contactAdmin,
      contactCourier,
      contactCustomer,
      productList,
      deliveryType
    ]
  },
  common: {
    routes: [
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
    ]
  }
};

export { modules, rolesConfig };

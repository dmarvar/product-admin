import {
  SET_INITIAL_DATA,
  // UPDATE_PRODUCTS,
  // UPDATE_ACCOUNTS,
  SET_PRODUCT_LIST,
  SET_ORDERS_LIST
} from "./actions";

const InitialState = {
  accountsPage: {},
  dasbhoardPage: {
    latestHits: {},
    notifications: [],
    orders: [],
    performance: {},
    storage: {}
  },
  productsPage: {
    categories: [],
    products: []
  },
  ordersPage: {
    orders: []
  }
};

function initState(state = InitialState, action) {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      const productsPage = { ...state.productsPage, products: action.payload };
      return { ...state, productsPage };
    case SET_ORDERS_LIST:
      const ordersPage = { ...state.ordersPage, orders: action.payload };
      return { ...state, ordersPage };
    default:
      return state;
  }
}

export default initState;

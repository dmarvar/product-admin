import { SET_INITIAL_DATA, UPDATE_PRODUCTS, UPDATE_ACCOUNTS } from "./actions";

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
  }
};

function initState(state = InitialState, action) {
  switch (action.type) {
    case SET_INITIAL_DATA:
      return Object.assign({}, state, action.payload);
    case UPDATE_PRODUCTS:
      return { ...state, productsPage: action.payload };
    case UPDATE_ACCOUNTS:
      return { ...state, accountsPage: action.payload };
    default:
      return state;
  }
}

export default initState;

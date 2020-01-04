// TIPOS DE ACCIONES

// export const ADD_PRODUCT = "ADD_PRODUCT";
export const SET_INITIAL_DATA = "SET_INITIAL_DATA";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const UPDATE_ACCOUNTS = "UPDATE_ACCOUNTS";
// export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// CREADORE DE ACCIONES

export function updateProducts(payload) {
  return { type: UPDATE_PRODUCTS, payload };
}

export function updateAccounts(payload) {
  return { type: UPDATE_ACCOUNTS, payload };
}

export function setInitialData(payload) {
  return {
    type: SET_INITIAL_DATA,
    payload
  };
}

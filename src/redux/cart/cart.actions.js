import { CartActionTypes } from "./cart.types";

export const toggleDropdown = () => ({
  type: CartActionTypes.TOGGLE_DROPDOWN
});

export const addItem = payload => ({
  type: CartActionTypes.ADD_ITEM,
  payload: payload
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const deleteItem = item => ({
  type: CartActionTypes.DELETE_ITEM,
  payload: item
});

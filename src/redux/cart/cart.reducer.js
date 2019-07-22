import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";
import { removeItem } from "./cart.utils";

const INITIAL_VALUE = {
  showDropdown: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        showDropdown: !state.showDropdown
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      const newCartItems = removeItem(state.cartItems, action.payload);
      return { ...state, cartItems: newCartItems };
    default:
      return state;
  }
};

export default cartReducer;

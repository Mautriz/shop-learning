import { CartActionTypes } from "./cart.types";

const INITIAL_VALUE = {
  showDropdown: false
};

const cartReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        showDropdown: !state.showDropdown
      };
    default:
      return state;
  }
};

export default cartReducer;

import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((total, currentItem) => {
      return total + currentItem.quantity;
    }, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.showDropdown
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity * currentItem.price,
      0
    )
);

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

import React from "react";

const CartIcon = ({ ...props }) => {
  return (
    <div className="cart-icon" {...props}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> 0 </span>
    </div>
  );
};

export default CartIcon;

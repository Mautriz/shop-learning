import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";
import "./cart-icon.styles.scss";
import React from "react";

const CartIcon = ({ itemCount, ...props }) => {
  return (
    <div className="cart-icon" {...props}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartIcon);

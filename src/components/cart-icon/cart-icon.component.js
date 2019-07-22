import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import "./cart-icon.styles.scss";
import React from "react";

const CartIcon = ({ itemCount, dispatch, ...props }) => {
  return (
    <div className="cart-icon" {...props}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  null
)(CartIcon);

import React from "react";
import Button from "../button/Button";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleDropdown } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const pushCheckout = () => {
    history.push(`/checkout`);
    dispatch(toggleDropdown());
  };

  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <span className="empty-message">THERE ARE NO CART ITEMS ATM</span>
      )}
      <Button onClick={pushCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

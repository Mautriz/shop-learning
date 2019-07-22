import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import { removeItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, dispatch }) => {
  const { imageUrl, name, price, quantity } = item;
  console.log(item);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => dispatch(removeItem(item))}>
        &#10005;
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);

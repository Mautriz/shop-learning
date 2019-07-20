import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./Header.scss";

import { toggleDropdown } from "../../redux/cart/cart.actions";

const Header = ({ currentUser, showDropdown, toggleDropdown }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon onClick={toggleDropdown} />
      </div>
      {showDropdown ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  showDropdown: state.cart.showDropdown
});

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleDropdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

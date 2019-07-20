import React from "react";
import "./Button.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button ${
        inverted ? "inverted" : null
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

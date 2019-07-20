import React, { Component } from "react";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            onChange={this.handleChange}
            label="password"
          />
          <Button type="submit">SUBMIT</Button>
          <Button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;

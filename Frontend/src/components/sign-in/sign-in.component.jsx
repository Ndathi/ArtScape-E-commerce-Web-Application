import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import axios from "axios";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      await axios({
        url: "http://127.0.0.1:8000/api/users/login",
        method: "post",
        data: {
          email: email,
          password: password,
        },
      });
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  //Function to get the value of the input field and set it as state.
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google Sign In
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

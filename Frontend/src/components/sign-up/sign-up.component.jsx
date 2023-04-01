import React from "react";
import axios from "axios";
import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    // if (email) {
    //   let res = false;
    //   for (var i = 0; i < email.length; i++) {
    //     if (email[i] === "@") {
    //       res = true;
    //     }
    //   }
    //   if (res === false) {
    //     alert("enter a valid email address");
    //   }
    //   return;
    // } else {
    //   alert("Please enter an email address");
    // }

    // // if (!/[.]/.test(email)) {
    // //   alert("Please enter a valid email address");
    // //   return;
    // // }

    // if (/\d/.test(displayName)) {
    //   alert("Display name should not contain letters");
    //   return;
    // }

    // var check = /^[^@]+$/.test(email);

    // console.log(check);

    if (/\d/.test(displayName)) {
      alert("Display name should not contain letters");
      return;
    }
    // if (check) {
    //   console.log("we are getting here");
    //   alert("Please enter a valid email address");
    //   return;
    // }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      alert("Password must be longer than six characters");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      await axios({
        url: "http://127.0.0.1:8000/api/users/signup",
        method: "post",
        data: {
          name: displayName,
          email: email,
          password: password,
          passwordConfirm: confirmPassword,
        },
      });

      alert("Your account is ready");
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email Address"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;

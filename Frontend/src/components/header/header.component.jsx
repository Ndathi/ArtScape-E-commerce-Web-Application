import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { selectCurrentUser } from "../../redux/User/user.selectors";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "../header/header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  // console.log(currentUser.displayName);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {/* <Link className="option" to="/discover">
          DISCOVER
        </Link> */}

        {currentUser ? (
          currentUser.email !== "administrator@gmail.com" ? (
            <Link className="option" to="/discover">
              DISCOVER
            </Link>
          ) : (
            <Link className="option" to="/orders">
              TRANSACTIONS
            </Link>
          )
        ) : (
          <Link className="option" to="/discover">
            DISCOVER
          </Link>
        )}

        {currentUser ? (
          currentUser.email !== "administrator@gmail.com" ? (
            <Link className="option" to="/profile">
              PROFILE
            </Link>
          ) : (
            <Link className="option" to="/users">
              USERS
            </Link>
          )
        ) : null}

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign">
            SIGN IN
          </Link>
        )}

        {currentUser ? (
          currentUser.email !== "administrator@gmail.com" ? (
            <CartIcon />
          ) : null
        ) : null}

        {currentUser ? (
          <Link className="option" to="/profile" id="IdName">
            {currentUser.displayName}
          </Link>
        ) : null}
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);

import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import CustomButton from "../../components/custom-button/custom-button.component";

import MpesaPopup from "../../components/mpesa/mpesa.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const CheckoutPage = ({ cartItems, total }) => {
  const [show, setShow] = useState(false);

  console.log(cartItems);
  const mpepeRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!mpepeRef.current.contains(event.target)) {
        setShow(false);
      }
    });
  });

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: KSH {total}</span>
      </div>
      <div ref={mpepeRef}>{show ? <MpesaPopup /> : null}</div>
      <div className="test-warning">
        *Please use the following credit card number for testing *
        <br />
        4242 4242 4242 4242 -Exp: 11/22 cvv: 123
      </div>
      <StripeCheckoutButton price={total} />
      <CustomButton onClick={() => setShow(!show)}>Lipa na mpesa</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

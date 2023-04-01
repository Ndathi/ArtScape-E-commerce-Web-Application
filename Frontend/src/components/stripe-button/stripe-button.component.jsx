import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51LzPlPBAvqMMjMvp2crWfAbJU5CuGJ4TTXjkohqL59AVPqcII2LvRRiIeAZFJ2sJ1lKCgj2ljO5UCBA24uSmVgux00Hwkhdeid";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="ArtScape"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is KSH ${price}`}
      amount={priceForStripe}
      panelLabel="Pay with Stripe"
      token={onToken}
      stripeKey={publishableKey}
      currency="KES"
    />
  );
};

export default StripeCheckoutButton;

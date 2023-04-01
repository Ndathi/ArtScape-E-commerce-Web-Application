import React from "react";

import "./order-item.styles.scss";

const OrderItem = ({ trnx }) => {
  const { trnx_id, number, amount } = trnx;

  const date = trnx.createdAt.substring(0, 10);
  return (
    <div className="checkout-item">
      <div className="image-container">
        {/* <img src={imageUrl} alt="item" /> */}
        {date}
      </div>

      <span className="name">{trnx_id}</span>
      <span className="quantity">
        {/* <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div> */}
        <span className="value">{amount}</span>
        {/* <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div> */}
      </span>
      <span className="price">{number}</span>

      {/* <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div> */}
    </div>
  );
};

export default OrderItem;

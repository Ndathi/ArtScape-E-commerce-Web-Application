import React from "react";

import "./user-item.styles.scss";

const UserItem = ({ trnx }) => {
  const { name, email, role } = trnx;

  const id = trnx._id.substring(0, 14);
  return (
    <div className="checkout-item">
      <div className="image-container">
        {/* <img src={imageUrl} alt="item" /> */}
        {name}
      </div>

      <span className="name">{email}</span>
      <span className="quantity">
        {/* <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div> */}
        <span className="value">{role}</span>
        {/* <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div> */}
      </span>
      <span className="price">{id}</span>

      {/* <div className="remove-button" onClick={() => {
        await axios
      }}>&#10005;</div> */}
    </div>
  );
};

// onClick={() => clearItem(cartItem)}

export default UserItem;

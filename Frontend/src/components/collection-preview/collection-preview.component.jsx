import React from "react";

import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  const linki = "/discover/" + title.toLowerCase() + "/";
  return (
    <div className="collection-preview">
      <Link className="link-url" to={linki}>
        {/* <CustomButton>{title}</CustomButton> */}
        <h2>{title}</h2>
      </Link>

      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <Link to={linki + item.id}>
              <CollectionItem key={item.id} item={item} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

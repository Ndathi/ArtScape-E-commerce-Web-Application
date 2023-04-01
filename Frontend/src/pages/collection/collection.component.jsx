import React from "react";

import { Link, useParams } from "react-router-dom";

import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { collectionID } = useParams();
  const { title, items } = collection;

  const itRoute = "/discover/" + collectionID + "/";

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <Link to={itRoute + item.id}>
            <CollectionItem key={item.id} item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { collectionID } = useParams();

  return {
    collection: selectCollection(collectionID)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);

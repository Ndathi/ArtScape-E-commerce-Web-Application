import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";

import { connect } from "react-redux";

import ProfileCollectionItem from "../../components/collection-item/profile-collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import AddArtwork from "../../components/addItem/add-item.component";

import ItemPopup from "../../components/item-popup/item-popup.component";
import "./profile.component.scss";
import { useRef } from "react";
import { useEffect } from "react";

const ProfilePage = ({ collection }) => {
  const { collectionID } = useParams();
  const { title, items } = collection;

  const itRoute = "/discover/paintings/";

  const [show, setShow] = useState(false);

  const mpepeRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!mpepeRef.current.contains(event.target)) {
        setShow(false);
      }
    });
  });
  return (
    <div className="collection-page">
      <div></div>
      <h2 className="title">My Projects</h2>
      <button className="additionbtn" onClick={() => setShow(!show)}>
        ADD ART
      </button>
      <p className="u-text-2">“You can do anything you set your mind to.”</p>

      <div className="items">
        {items.map((item) => (
          <Link to={itRoute + item.id}>
            <ProfileCollectionItem key={item.id} item={item} />
          </Link>
        ))}
      </div>
      <div ref={mpepeRef}>{show ? <AddArtwork /> : null}</div>
      {/* <AddArtwork /> */}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //const { collectionID } = useParams();

  return {
    collection: selectCollection("paintings")(state),
  };
};

export default connect(mapStateToProps)(ProfilePage);

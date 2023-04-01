import React from "react";

import { Route, Routes } from "react-router-dom";

import CollectionPage from "../collection/collection.component";

import ItemPopup from "../../components/item-popup/item-popup.component";

const CollectionRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CollectionPage />} />
        <Route path=":itemID" element={<ItemPopup />} />
      </Routes>
    </div>
  );
};

export default CollectionRoute;

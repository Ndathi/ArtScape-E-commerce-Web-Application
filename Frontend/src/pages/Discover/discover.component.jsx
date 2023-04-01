import React from "react";

import { Route, Routes } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import CollectionRoute from "../collectionRoute/collectionRoute.component";

const DiscoverPage = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<CollectionsOverview />} />
        <Route path=":collectionID/*" element={<CollectionRoute />} />
      </Routes>
    </div>
  );
};

export default DiscoverPage;

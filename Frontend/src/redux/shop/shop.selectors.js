import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectItem = (collectionUrlParam, itemUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections[collectionUrlParam].items.find(
      (item) => item.id.toString() === itemUrlParam
    )
  );

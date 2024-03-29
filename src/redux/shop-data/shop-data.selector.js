import { createSelector } from "reselect";

export const shopSelector = state => state.shop;

export const collectionsSelector = createSelector(
  [shopSelector],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [collectionsSelector],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [collectionsSelector],
    collections => collections[collectionUrlParam]
  );

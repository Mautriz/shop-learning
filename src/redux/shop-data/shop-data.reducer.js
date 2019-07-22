import shopData from "../../data/shop-data";

const initialState = {
  collections: shopData
};

export default (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

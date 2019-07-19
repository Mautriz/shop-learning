import React, { Component } from "react";
import SHOP_DATA from "../../data/shop-data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

class ShopPage extends Component {
  state = {
    // id, title, routeName, items [{ id, name, imageUrl, price}]
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
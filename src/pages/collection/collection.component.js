import React from "react";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop-data/shop-data.selector";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

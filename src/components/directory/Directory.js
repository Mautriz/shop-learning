import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";
import { connect } from "react-redux";
import { sectionSelector } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  sections: sectionSelector(state)
});

export default connect(mapStateToProps)(Directory);

import React from "react";
import "./HomePage.scss";
import Directory from "../../components/directory/Directory";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
};

export default HomePage;

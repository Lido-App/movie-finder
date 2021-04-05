import React from "react";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <div className="rmdb-navigation">
      <div className="rmdb-navigation-content">
        <a href="/movie-finder">
          <p>HOME</p>
        </a>
        <p>/</p>
        <p>{props.movie}</p>
      </div>
    </div>
  );
};

export default Navigation;

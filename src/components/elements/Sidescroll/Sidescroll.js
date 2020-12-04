import React from "react";
import propTypes from "prop-types";
import "./Sidescroll.css";

const Sidescroll = (props) => {
  const renderElements = () => {
    const SCROLLELEMENTS = props.children.map((element, i) => {
      return (
        <div key={i} className="rmdb-SCROLL-element">
          {element}
        </div>
      );
    });
    return SCROLLELEMENTS;
  };
  return (
    <div className="rmdb-SCROLL">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="rmdb-SCROLL-content">{renderElements()}</div>
    </div>
  );
};

Sidescroll.prototypes = {
  header: propTypes.string,
  loading: propTypes.bool.isRequired,
};

export default Sidescroll;

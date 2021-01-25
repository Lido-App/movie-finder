import React from "react";
import FontAwesome from "react-fontawesome";
import { calcTime, convertMoney } from "../../../helpers.js";
import "./MovieInfoBar.css";

const MovieInfoBar = (props) => (
  <div className="rmdb-movieinfobar">
    <div className="rmdb-movieinfobar-content">
      {Boolean(props.time) && (
        <div className="rmdb-movieinfobar-content-col">
          <FontAwesome className="fa-time" name="clock-o" size="2x" />
          <span className="rmdb-movieinfobar-info">
            Running time: {calcTime(props.time)}
          </span>
        </div>
      )}
      {Boolean(props.budget) && (
        <div className="rmdb-movieinfobar-content-col">
          <FontAwesome className="fa-budget" name="money" size="2x" />
          <span className="rmdb-movieinfobar-info">
            Budget: {convertMoney(props.budget)}
          </span>
        </div>
      )}
      {Boolean(props.revenue) && (
        <div className="rmdb-movieinfobar-content-col">
          <FontAwesome className="fa-revenue" name="ticket" size="2x" />
          <span className="rmdb-movieinfobar-info">
            Revenue: {convertMoney(props.revenue)}
          </span>
        </div>
      )}
    </div>
  </div>
);

export default MovieInfoBar;

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import movieLogo from "./reactMovie_logo.png";
import tmdbLogo from "./tmdb_logo.png";

const Header = () => {
  function clearStorage() {
    localStorage.clear();
  }
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <a href="/movie-finder" onClick={clearStorage}>
          <img className="rmdb-logo" src={movieLogo} alt="rmdb-logo" />
        </a>

        <img className="rmdb-tmdb-logo" src={tmdbLogo} alt="rmdb-tmdb-logo" />
      </div>
    </div>
  );
};

export default Header;

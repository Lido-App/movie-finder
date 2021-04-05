import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./MovieThumb.css";

//es6 destructuring props
const MovieThumb = ({ image, movieId, movieName, clickable }) => {
  return (
    <div className="rmdb-moviethumb">
      {clickable ? (
        <a href={`/movie-finder/${movieId}`}>
          <img src={image} alt="moviethumb" />
        </a>
      ) : (
        <img src={image} alt="moviethumb" />
      )}
    </div>
  );
};

MovieThumb.propTypes = {
  image: propTypes.string,
  movieId: propTypes.number,
  movieName: propTypes.string,
};

export default MovieThumb;

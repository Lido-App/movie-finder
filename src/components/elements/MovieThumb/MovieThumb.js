import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./MovieThumb.css";

//es6 destructuring props
const MovieThumb = ({ image, movieId, movieName, clickable }) => {
  const noImage = "/movie-finder/images/no_image.jpg";

  return (
    <div className="rmdb-moviethumb">
      {clickable ? (
        <a href={`/movie-finder/${movieId}`}>
          <img src={image ?? noImage} alt="moviethumb" />
        </a>
      ) : (
        <img src={image ?? noImage} alt="moviethumb" />
      )}
      {!image && (
        <div className="title">{movieName}</div>
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

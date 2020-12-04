import React, { Component, useState, useEffect } from "react";
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import Actor from "../elements/Actor/Actor";
import Spinner from "../elements/Spinner/Spinner";
import fetchMovieData from "../../api/fetchMovieData";
import "./Movie.css";
import Sidescroll from "../elements/Sidescroll/Sidescroll";

export default ({ location, match }) => {
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState(null);
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(async () => {
    setLoading(true);
    const result = await fetchMovieData(match.params.movieId);

    setMovie(result.movie);
    setActors(result.actors);
    setDirectors(result.directors);
    setLoading(false);
  }, [match.params.movieId]);

  console.log(directors);

  return (
    <div className="rmdb-movie">
      {movie ? (
        <div>
          <Navigation movie={location.movieName} />
          <MovieInfo movie={movie} directors={directors} />
          <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
          />
        </div>
      ) : null}
      {!actors && !loading ? <h1>No Movie Found!</h1> : null}
      {loading ? <Spinner /> : null}
      {actors ? (
        <div className="rmdb-movie-grid">
          <Sidescroll header={"Actors"}>
            {actors.map((element, i) => {
              return <Actor key={i} actor={element} />;
            })}
          </Sidescroll>
        </div>
      ) : null}
    </div>
  );
};

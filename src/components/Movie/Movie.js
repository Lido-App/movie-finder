import React, { Component, useState, useEffect } from "react";
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import Actor from "../elements/Actor/Actor";
import Spinner from "../elements/Spinner/Spinner";

import "./Movie.css";
import Sidescroll from "../elements/Sidescroll/Sidescroll";
import { IMAGE_BASE_URL, ICON_SIZE, POSTER_SIZE } from "../../config";
import fetcher from "../../api/fetcher";

export default ({ location, match }) => {
  const [movie, setMovie] = useState(null);
  const [streamingServices, setStreamingServices] = useState(null);
  const [actors, setActors] = useState(null);
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);

  useEffect(async () => {
    setLoading(true);
    const [movie, streamingServices, credits, similarMovies] = await Promise.all([
      fetcher({ id: match.params.movieId, prefix: "movie", routeName: "" }),
      fetcher({
        id: match.params.movieId,
        prefix: "movie",
        routeName: "/watch/providers",
      }),
      fetcher({
        id: match.params.movieId,
        prefix: "movie",
        routeName: "/credits",
      }),
      fetcher({
        id: match.params.movieId,
        prefix: "movie",
        routeName: "/similar",
      }),
    ]);

    console.log(streamingServices)
    const { flatrate = [], rent = [], buy = [] } = streamingServices.results?.US ?? {};
    const allStreamingServices = [...flatrate, ...rent, ...buy];

    setSimilarMovies(similarMovies.results);
    setMovie(movie);
    setStreamingServices(allStreamingServices.length ? allStreamingServices : null);
    setActors(credits.cast);
    setDirectors(credits.crew.filter((member) => member.job === "Director"));
    setLoading(false);
  }, [match.params.movieId]);

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
      {!streamingServices && !loading ? <h1>No Streaming Services Found!</h1> : null}
      {!actors && !loading ? <h1>No Movie Found!</h1> : null}
      {loading ? <Spinner /> : null}
      {streamingServices ? (
        <ul className="streaming-service-list">{streamingServices.map(({ logo_path, provider_name, provider_id }) => (
          <li key={provider_id} className="streaming-service-list-item">
            <img
              src={`${IMAGE_BASE_URL}${ICON_SIZE}${logo_path}`}
              alt={provider_name}
            />
          </li>
        ))}</ul>
      ) : null}
      {actors ? (
        <div className="rmdb-movie-grid">
          <Sidescroll header={"Actors"}>
            {actors.map((element, i) => {
              return <Actor key={i} actor={element} />;
            })}
          </Sidescroll>
        </div>
      ) : null}
      {similarMovies ? (
        <ul>
          {similarMovies.map(
            ({
              original_title: originalTitle,
              id,
              poster_path: posterPath,
              backdrop_path: backdropPath,
            }) => (
              <div style={{ padding: "1em", display: "inline-block" }}>
                <a
                  href={`/movie-finder/${id}`}
                  style={{
                    outline: "none",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={`${IMAGE_BASE_URL}w185${backdropPath}`}
                    style={{ display: "block" }}
                  />
                  {originalTitle}
                </a>
              </div>
            )
          )}
        </ul>
      ) : null}
    </div>
  );
};

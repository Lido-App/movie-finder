import React, { useState, useEffect } from "react";
import MovieThumb from '../MovieThumb/MovieThumb';
import { IMAGE_BASE_URL, PORTRAIT_SIZE, POSTER_SIZE } from "../../../config";
import FourColGrid from "../FourColGrid/FourColGrid";

import "./ActorInfo.css";

import fetchStarredInMovies from "../../../api/fetchStarredInMovies";

const ActorInfo = (props) => {
  const [starredInMovieNames, setStarredInMovieNames] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(async () => {
    setLoading(true);

    const similarMovieResult = await fetchStarredInMovies(props.actor.id);
    setStarredInMovieNames(similarMovieResult.credits);

    setLoading(false);
  }, [props.actor.id]);

  const { name, profile_path } = props.actor;
  console.log("props.actor : %O", props.actor);
  return (
    <div>
      <div className="rmdb-actorinfo">
        <div className="rmdb-actorinfo-thumb">
          {profile_path && profile_path.length > 0 && (
            <img
              src={`${IMAGE_BASE_URL}${PORTRAIT_SIZE}${profile_path}`}
              alt="actorthumb"
            />
          )}
        </div>

        <div className="rmdb-actorinfo-details">
          <h1 className="rmdb-actorinfo-details-item rmdb-actorinfo-name">
            {name}
          </h1>

          <div className="rmdb-actorinfo-details-item rmdb-actorinfo-bio">
            {props.actor.biography}
          </div>

          <div className="rmdb-actorinfo-details-item rmdb-actorinfo-otherfilms">
            {loading ? (
              <div>Loading</div>
            ) : (
              Object.keys(starredInMovieNames).map((dept) =>
                <div className="rmdb-home-grid">
                  <FourColGrid header={dept}>
                    {starredInMovieNames && starredInMovieNames[dept]?.map((movie) => (
                      <MovieThumb
                        clickable
                        image={movie.poster_path && `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                        movieId={movie.id}
                        movieName={movie.title}
                      />
                    ))}
                  </FourColGrid>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <pre>
        {Object.keys(props.actor).map((prop) => {
          return (
            <>
              {`${prop} : ${props.actor[prop]}`}
              <br />
            </>
          );
        })}
      </pre>
    </div>
  );
};

export default ActorInfo;

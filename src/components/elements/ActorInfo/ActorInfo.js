import React, { useState, useEffect } from "react";

import { IMAGE_BASE_URL, PORTRAIT_SIZE } from "../../../config";

import "./ActorInfo.css";

import fetchStarredInMovies from "../../../api/fetchStarredInMovies";

const ActorInfo = (props) => {
  const [starredInMovieNames, setStarredInMovieNames] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(async () => {
    setLoading(true);

    const similarMovieResult = await fetchStarredInMovies(props.actor.id);
    setStarredInMovieNames(similarMovieResult.movies);

    setLoading(false);
  }, [props.actor.id]);

  const { name, profile_path } = props.actor;
  console.log("props.actor : %O", props.actor);
  return (
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
        {Object.keys(props.actor).map((prop) => {
          return (
            <>
              {`${prop} : ${props.actor[prop]}`}
              <br />
            </>
          );
        })}
        <div className="rmdb-actorinfo-name">{name}</div>
        {JSON.stringify(starredInMovieNames)}
      </div>
    </div>
  );
};

export default ActorInfo;

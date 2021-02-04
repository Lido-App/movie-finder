import React, { useState, useEffect } from "react";
import ActorInfo from "../elements/ActorInfo/ActorInfo";
import Spinner from "../elements/Spinner/Spinner";
import fetchActorData from "../../api/fetchActorData";
import "./ActorDetails.css";

export default ({ location, match }) => {
  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(async () => {
    setLoading(true);
    const result = await fetchActorData(match.params.actorId);

    setActor(result.actor);
    setLoading(false);
  }, [match.params.actorId]);

  return (
    <div className="rmdb-actorDetails">
      {actor ? (
        <div>
          <ActorInfo actor={actor} />
          {/* <ActorInfoBar
          /> */}
        </div>
      ) : null}
      {!actor && !loading ? <h1>No Actor Found!</h1> : null}
      {loading ? <Spinner /> : null}
    </div>
  );
};

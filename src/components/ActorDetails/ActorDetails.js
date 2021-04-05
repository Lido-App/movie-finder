import React, { useState, useEffect } from "react";
import ActorInfo from "../elements/ActorInfo/ActorInfo";
import Spinner from "../elements/Spinner/Spinner";
import fetcher from "../../api/fetcher";
import "./ActorDetails.css";

export default ({ location, match }) => {
  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(async () => {
    setLoading(true);
    const actor = await fetcher({
      id: match.params.actorId,
      prefix: "person",
      routeName: "",
    });

    setActor(actor);
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

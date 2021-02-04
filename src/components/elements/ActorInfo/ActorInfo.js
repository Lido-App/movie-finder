import React from "react";

import { IMAGE_BASE_URL, PORTRAIT_SIZE } from "../../../config";

import "./ActorInfo.css";

const ActorInfo = (props) => {
  const { name, profile_path } = props.actor;

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
      {name}
    </div>
  );
};

export default ActorInfo;

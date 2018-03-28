import React from "react";
import "./TeamMember.css";

const TeamMember = ({ name, imgURL, removeMember, id, displayInfo }) => {
  return (
    <div className="team-member">
      <p>{name}</p>
      <img
        src={imgURL}
        alt={`${name} champion pic`}
        onClick={e => displayInfo(id)}
      />
      <button className="remove" onClick={() => removeMember(id)}>
        REMOVE
      </button>
    </div>
  );
};

export default TeamMember;

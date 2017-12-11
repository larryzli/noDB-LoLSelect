import React from "react";
import "./TeamMember.css";

const TeamMember = ({ name, imgURL, removeMember, id }) => {
    return (
        <div className="team-member">
            <p>{name}</p>
            <img src={imgURL} alt={`${name} champion pic`} />
            <br />
            <button onClick={() => removeMember(id)}>REMOVE</button>
            <hr />
        </div>
    );
};

export default TeamMember;

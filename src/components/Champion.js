import React from "react";
import "./Champion.css";

const Champion = ({ name, picURL }) => {
    return (
        <div className="champion">
            <p>{name}</p>
            <img src={picURL} alt={`${name} champion pic`} />
        </div>
    );
};

export default Champion;

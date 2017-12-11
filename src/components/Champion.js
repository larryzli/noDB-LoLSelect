import React from "react";
import "./Champion.css";

const Champion = ({ name, id, picURL, champAddRed, champAddBlue }) => {
    return (
        <div onClick={() => champAddBlue(id)} className="champion">
            <p>{name}</p>
            <img src={picURL} alt={`${name} champion pic`} />
        </div>
    );
};

export default Champion;

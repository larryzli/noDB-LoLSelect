import React from "react";
import "./Champion.css";

const Champion = ({ name, id, picURL, clickHandler }) => {
    return (
        <div onClick={() => clickHandler(id)} className="champion">
            <p>{name}</p>
            <img src={picURL} alt={`${name} champion pic`} />
        </div>
    );
};

export default Champion;

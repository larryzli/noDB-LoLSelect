import React from "react";
import "./Champion.css";

const Champion = ({ name, id, picURL, champAddRed, champAddBlue }) => {
    return (
        <div className="champion">
            <p>{name}</p>
            <img src={picURL} alt={`${name} champion pic`} />
            <div className="buttons-container">
                <button className="red-button" onClick={() => champAddRed(id)}>
                    RED
                </button>
                <button
                    className="blue-button"
                    onClick={() => champAddBlue(id)}
                >
                    BLUE
                </button>
            </div>
        </div>
    );
};

export default Champion;

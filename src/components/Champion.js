import React from "react";
import "./Champion.css";

const Champion = ({
  name,
  id,
  picURL,
  champAddRed,
  champAddBlue,
  reset,
  displayInfo
}) => {
  return (
    <div className="champion">
      <p>{name}</p>
      <img
        src={picURL}
        alt={`${name} champion pic`}
        onClick={e => displayInfo(id)}
      />
      <div className="buttons-container">
        <button
          className="red-button"
          onClick={() => {
            champAddRed(id);
            reset();
          }}
        >
          RED
        </button>
        <button
          className="blue-button"
          onClick={() => {
            champAddBlue(id);
            reset();
          }}
        >
          BLUE
        </button>
      </div>
    </div>
  );
};

export default Champion;

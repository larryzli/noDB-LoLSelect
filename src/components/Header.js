import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="subtitle">LEAGUE OF LEGENDS</div>
      <div className="title">CHAMPION SELECT</div>
      <div className="author">
        Created by{" "}
        <a
          href="http://www.larryzli.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Larry Li
        </a>. View on{" "}
        <a
          href="https://github.com/larryzli/noDB-LoLSelect"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>.
      </div>
    </div>
  );
};

export default Header;

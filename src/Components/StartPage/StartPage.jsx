import React from "react";

import findIcon from "../../img/lopa.png";

import "./StartPage.css";

const StartPage = () => {
  return (
    <div className="icon_pos">
      <img className="iconImg" alt="search" src={findIcon}></img>
      <div className="headline_text">Start with searching a GitHub user</div>
    </div>
  );
};

export default StartPage;

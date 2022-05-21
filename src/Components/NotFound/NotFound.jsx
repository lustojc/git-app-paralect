import React from "react";

import notFound from "../../img/notFound.png";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not_found">
      <img src={notFound} alt="notFound"></img>
    </div>
  );
};

export default NotFound;

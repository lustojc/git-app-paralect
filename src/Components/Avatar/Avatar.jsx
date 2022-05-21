import React from "react";

import "./Avatar.css";

const Avatar = ({ data }) => {
  return (
    <div>
      {data.avatar_url && (
        <div className="avatar">
          <img className="avatar_img" alt="avatar" src={data.avatar_url} />
        </div>
      )}
    </div>
  );
};

export default Avatar;

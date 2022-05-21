import React from "react";

import followers from "../../img/shared.png";
import following from "../../img/provate.png";

import "./UserInfo.css";

const UserInfo = ({ data }) => {
  return (
    <div>
      <div>
        <h1 className="name">{data.name}</h1>
      </div>
      <div className="userlink_marg">
        <a
          className="name_link"
          target="_blank"
          rel="noreferrer"
          href={data.html_url}
        >
          {data.login}
        </a>
      </div>
      <div className="user_follow">
        <div className="user_followers">
          <img className="men_icon" alt="followers" src={followers} />
          <div className="followers">
            {data.followers >= 10000
              ? (data.followers / 1000).toFixed(1) + `k followers`
              : data.followers + ` followers`}
          </div>
        </div>
        <div className="user_following">
          <img className="men_icon" alt="following" src={following}></img>
          <div className="followers">{data.following} following</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

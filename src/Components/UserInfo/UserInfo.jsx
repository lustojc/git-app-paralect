import React from "react";
import "./UserInfo.css";
import followers from "../../img/shared.png"
import following from "../../img/provate.png"

const UserInfo = ({ data }) => {

    return (
        <div>
            <div>
                <h1 className="name">{data.name}</h1>
            </div>
            <div className="userlink_marg">
                <a className="name_link" target="_blank" rel="noreferrer" href={data.html_url}>{data.login}</a>
            </div>
            <div className="user_follow">
                <div className="user_followers">
                    {(data.followers) ? <div><img className="men_icon" alt="followers" src={followers}></img></div> : <div></div>}
                    {(data.followers >= 10000) ? <div className="followers">{(data.followers /1000).toFixed(1)}k followers</div> : <div className="followers">{(data.followers)} followers</div>}
                </div>
                <div className="user_following">
                    <div><img className="men_icon" alt="following" src={following} ></img></div>
                    <div className="followers">{data.following} following</div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
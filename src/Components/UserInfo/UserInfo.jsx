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
            <div>
                <a className="name_link" target="_blank" href={data.html_url}>{data.login}</a>
            </div>
            <div className="user_follow">
                <div className="user_followers">
                    {(data.followers) ? <div><img className="men_icon" src={followers}></img></div> : <div></div>}
                    {(data.followers) ? <div className="followers">{Math.round(data.followers / 1000)}k followers</div> : <div></div>}
                </div>
                <div className="user_following">
                    {(data.following) ? <div><img className="men_icon" alt="following" src={following} ></img></div> : <div></div>}
                    {(data.following) ? <div className="followers">{data.following} following</div> : <div></div>}
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
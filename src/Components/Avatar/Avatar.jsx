import React from "react";
import "./Avatar.css";

const Avatar = ({data}) => {   
    return (
        <div >
        {(data.avatar_url) ? <div className="avatar"><img className="avatar_img" src={data.avatar_url}></img></div> : <div></div> }
        </div>
    );
};

export default Avatar;
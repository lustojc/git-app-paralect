import React from "react";
import search from "../../img/image.png";
import logo from "../../img/Vector.png";
import "./Input.css";

const Input = ({ setUsername, setErr }) => {
    const handleInfo = (e) => {
        if (e.which === 13 || e.keyCode === 13) {
            setUsername(e.target.value);
            setErr(null);
        };
    };

    return (
        <div className="header">
            <img className="logo" alt="logo" src={logo} />
            <div className="search_pos__rel">
                <img className="search_pos__abs" alt="search" src={search} />
                <input className="searchLine" type="text" placeholder="Enter GitHub username" onKeyPress={handleInfo} />
            </div>
        </div>
    );
};

export default Input;
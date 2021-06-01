import React, { useEffect, useState, useRef } from "react";
import './GetInfo.css';
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import Repositories from "../Repositories/Repositories";
import Input from "../Input/Input";
import lopa from "../../img/lopa.png";
import notFound from "../../img/notFound.png";
import axios from "axios";


const GetInfo = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [rep, setRep] = useState([]);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);
    const firstLoading = useRef(true);

    const handleUserRequest = () => {
        if (firstLoading.current) {
            firstLoading.current = false;
            return;
        }
        axios.get(`https://api.github.com/users/${username}`)
            .then((data) => {
                setData(data.data);
                setLoading(true);
            }, (err) => {
                setErr(err);
            });
    };

    useEffect(() => {
        handleUserRequest();
    }, [username]);

    useEffect(() => {
        setLoading(true);
        setTimeout(handleLoading, 1000);
    }, [username]);

    const handleLoading = () => {
        setLoading(false);
    };

    return (
        <>
            <div>
                <div className="main_body">
                    <Input username={username} setUsername={setUsername} setErr={setErr} />
                    {(username == "")
                        ? <div className="lopa_pos">
                            <img className="lopa" src={lopa}></img>
                            <div className="lopa_text">Start with searching a GitHub user</div>
                        </div>
                        : (loading)
                            ? <div className="loader"></div>
                            : <div>
                                {(err)
                                    ? <div className="not_found">
                                        <img src={notFound}></img>
                                    </div>
                                    : <div>
                                        <div className="main_info">
                                            <div >
                                                <div>
                                                    <Avatar data={data} />
                                                </div>
                                                <div>
                                                    <UserInfo data={data} />
                                                </div>
                                            </div>
                                            <div className="rep-width">
                                                <Repositories  username={username} data={data} rep={rep} setRep={setRep} />
                                            </div>
                                        </div>
                                    </div>}
                            </div>}
                </div>
            </div>
        </>
    );
};

export default GetInfo;
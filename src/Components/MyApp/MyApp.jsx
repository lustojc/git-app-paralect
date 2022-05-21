import React, { useEffect, useState } from "react";

import axios from "axios";

import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import Repositories from "../Repositories/Repositories";
import Input from "../Input/Input";
import NotFound from "../NotFound/NotFound";
import StartPage from "../StartPage/StartPage";

import "./styles.css";

const MyApp = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [rep, setRep] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUserRequest = () => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        setTimeout(handleLoading, 1000);
        setErr(error.response.status);
      })
      .finally(() => {
        setTimeout(handleLoading, 1000);
      });
  };

  useEffect(() => {
    setLoading(true);
    setErr(false);
    handleUserRequest();
  }, [username]);

  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <div className="main_body">
      <Input username={username} setUsername={setUsername} setErr={setErr} />
      {!username ? (
        <StartPage />
      ) : (
        <>
          {loading ? (
            <div className="loader" />
          ) : (
            <>
              {!err ? (
                <div className="main_info">
                  <div>
                    <Avatar data={data} />
                    <UserInfo data={data} />
                  </div>
                  <>
                    <Repositories
                      username={username}
                      data={data}
                      rep={rep}
                      setRep={setRep}
                    />
                  </>
                </div>
              ) : (
                <NotFound err={err} />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MyApp;

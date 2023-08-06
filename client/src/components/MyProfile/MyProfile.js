import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./MyProfile.css";

function MyProfile(props) {
  // console.log("MyProfile");
  const port = 3001;
  const navigate = useNavigate();

  const [userId, setUserId] = useState(localStorage.getItem("user_id"));
  const [userData, setUserData] = useState({});
  // console.log("Myprofile", userId);

  useEffect(() => {
    userId === null
      ? console.log("nouser")
      : axios
          .get(`http://localhost:${port}/myprofile`, {
            params: { user_id: userId },
          })
          .then(function (response) {
            console.log("Response data", response.data);
            setUserData(response.data);
          })
          .catch(function (error) {
            console.log("Error", error);
          });
  }, [userId]);

  function logOutHandler(event) {
    props.onLogout("Logged out");
    navigate("/");
  }

  return (
    <div>
      <h2>My profile</h2>
      <div className="profile">
        <h1 className="name">Username: {userData.user_name}</h1>
        <p className="email">Email: {userData.user_email}</p>
        <p className="address">Address: {userData.user_address}</p>
      </div>
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}

export default MyProfile;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import "./MyProfile.css";
import profile_style from "./MyProfile.module.css";

function MyProfile(props) {
  // console.log("MyProfile");
  const port = 3001;
  const navigate = useNavigate();

  const [userId, setUserId] = useState(localStorage.getItem("user_id"));
  const [userData, setUserData] = useState({});

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

  function editHandler(event) {
    navigate("/editprofile");
  }

  return (
    <div className={profile_style["profile-box"]}>
      <h2>Profile</h2>
      <div className={profile_style["profile-edit-button"]}>
        <button onClick={editHandler}>Edit the profile</button>
      </div>
      <div className={profile_style["profile-details"]}>
        <p>
          <b>Name: </b>
          {userData.user_name}
        </p>
        <p>
          <b>Email: </b>
          {userData.user_email}
        </p>
        <p>
          <b>Address: </b>
          {userData.user_address}
        </p>
        <p>
          <b>Location: </b>
          {userData.user_location}
        </p>
        <p>
          <b>Contact: </b>
          {userData.user_contact}
        </p>
      </div>
      <div className={profile_style["profile-logout"]}>
        <button onClick={logOutHandler}>Log Out</button>
      </div>
    </div>
  );
}

export default MyProfile;

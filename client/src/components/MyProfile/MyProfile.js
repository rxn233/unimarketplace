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
    <div>
      <h2>My profile</h2>
      <button onClick={editHandler}>Edit the profile</button>
      <div className="profile">
        <p className="name">Username: {userData.user_name}</p>
        <p className="email">Email: {userData.user_email}</p>
        <p className="address">Address: {userData.user_address}</p>
        <p className="contact">Contact: {userData.user_contact}</p>
      </div>
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}

export default MyProfile;

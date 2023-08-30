import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./MyProfile.css";

function MyProfile(props) {
  // console.log("MyProfile");
  const port = 3001;
  const navigate = useNavigate();

  const [userId, setUserId] = useState(localStorage.getItem("user_id"));
  // const [userData, setUserData] = useState({});
  // const [editedData, setEditedData] = useState({ userData });
  const [isEditing, setIsEditing] = useState(false);
  //Adding separate values
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userEmail, setUserEmail] = useState("");
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
            console.log("Response data", response.data.user_name);
            setUserName(response.data.user_name);
            setUserAddress(response.data.user_address);
            setUserContact(response.data.user_contact);
            setUserLocation(response.user_location);
            setUserEmail(response.data.user_email);
            // setUserData(response.data);
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
    setIsEditing(true);
  }

  function profileSaveHandler() {
    // console.log("UserData", userData);
    // console.log("EditedData", editedData);
    console.log(userEmail);
    console.log(userContact);
    console.log(userAddress);
    console.log(userName);
  }

  function cancelHandler() {
    setIsEditing(false);
  }

  return (
    <div>
      <h2>My profile</h2>
      <button onClick={editHandler}>Edit the profile</button>
      {isEditing ? (
        <div>
          <p>Email: {userEmail}</p>
          <label htmlFor="user_name">Name: </label>
          <input
            name="user_name"
            id="user_name"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <label htmlFor="user_address">Address: </label>
          <input
            id="user_address"
            name="user_address"
            value={userAddress}
            onChange={(event) => {
              setUserAddress(event.target.value);
            }}
          />
          <label htmlFor="user_contact">Contact: </label>
          <input
            name="user_contact"
            id="user_contact"
            value={userContact}
            onChange={(event) => {
              setUserContact(event.target.value);
            }}
          />
          <label htmlFor="user_location">Location: </label>
          <input
            id="user_location"
            name="user_location"
            value={userLocation}
            onChange={(event) => {
              setUserLocation(event.target.value);
            }}
          />
          <button onClick={profileSaveHandler}>Save</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      ) : (
        <div className="profile">
          <h1 className="name">Username: {userName}</h1>
          <p className="email">Email: {userEmail}</p>
          <p className="address">Address: {userAddress}</p>
        </div>
      )}
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}

export default MyProfile;

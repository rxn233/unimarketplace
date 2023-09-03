import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import edit_profile_style from "./EditProfile.module.css";

const port = 3001;

function EditProfile() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(localStorage.getItem("user_id") || "");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userLocation, setUserLocation] = useState("");

  function profileSaveHandler() {
    const profileUpdateData = {
      userId,
      userName,
      userEmail,
      userAddress,
      userContact,
      userLocation,
    };
    console.log(userName);
    console.log(userEmail);
    console.log(userAddress);
    console.log(userContact);
    console.log(userLocation);
    axios
      .post(`http://localhost:${port}/myprofile`, {
        updatedData: profileUpdateData,
      })
      .then(function (response) {
        if (response.data.flag === "y") {
          navigate("/myprofile");
        }
      })
      .catch(function (error) {
        console.log("Error", error);
      });
  }
  function cancelHandler() {
    navigate("/myprofile");
  }

  useEffect(() => {
    userId === null
      ? console.log("nouser")
      : axios
          .get(`http://localhost:${port}/myprofile`, {
            params: { user_id: userId },
          })
          .then(function (response) {
            console.log("Response data", response.data);
            setUserName(response.data.user_name);
            setUserAddress(response.data.user_address);
            setUserContact(response.data.user_contact);
            setUserLocation(response.data.user_location);
            setUserEmail(response.data.user_email);
          })
          .catch(function (error) {
            console.log("Error", error);
          });
  }, [userId]);
  return (
    <div className={edit_profile_style["edit-profile-box"]}>
      <h2>Edit your Profile</h2>
      <div className={edit_profile_style["edit-profile-details"]}>
        <p>
          <b>Email: </b>
          {userEmail}
        </p>
        <label htmlFor="user_name">
          <b>Name: </b>
        </label>
        <input
          name="user_name"
          id="user_name"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <br />
        <label htmlFor="user_address">
          <b>Address: </b>
        </label>
        <input
          id="user_address"
          name="user_address"
          value={userAddress}
          onChange={(event) => {
            setUserAddress(event.target.value);
          }}
        />
        <br />
        <label htmlFor="user_contact">
          <b>Contact: </b>
        </label>
        <input
          name="user_contact"
          id="user_contact"
          value={userContact}
          onChange={(event) => {
            setUserContact(event.target.value);
          }}
        />
        <br />
        <label htmlFor="user_location">
          <b>Location: </b>
        </label>
        <input
          id="user_location"
          name="user_location"
          value={userLocation}
          onChange={(event) => {
            setUserLocation(event.target.value);
          }}
        />
        <br />
      </div>
      <div>
        <span>
          <button onClick={profileSaveHandler}>Save</button>
        </span>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
    </div>
  );
}
export default EditProfile;

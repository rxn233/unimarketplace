import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

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
  );
}
export default EditProfile;

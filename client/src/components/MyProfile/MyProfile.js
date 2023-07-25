import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function MyProfile(props) {
  console.log("MyProfile");
  console.log(props);

  const navigate = useNavigate();
//   useEffect(() => {
//     console.log("MyProfile", props);
//   }, [props]);

function logOutHandler(logOutData){
    props.onLogout('Logged out');
    navigate('/');
}

  return (
    <div>
      <h2>My profile</h2>
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}

export default MyProfile;

import { Fragment } from "react";
import "./AboutUs.css";
import { useNavigate } from "react-router";

function AboutUs() {
  
  const navigate = useNavigate();
  
  // function onClickHandler(){
  //   navigate('/');
  // }

  return (
    <div className="main-aboutus">
      <h2>About Us</h2>
      {/* <button onClick={onClickHandler}>Go to Homepage</button> */}
    </div>
  );
}
export default AboutUs;

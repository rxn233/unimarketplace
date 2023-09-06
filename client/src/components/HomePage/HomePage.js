import { Fragment } from "react";
import ProductSection from "../ProductSection/ProductSection";
// import "./HomePage.css";

function HomePage(props) {
  function recipientUser(user) {
    props.onMessage(user);
    // console.log("Homepage", user);
  }

  return (
    <div className="homepage">
      <ProductSection onMessage={recipientUser} />
    </div>
  );
}

export default HomePage;

import { Fragment } from "react";
import ProductSection from "../ProductSection/ProductSection";
// import "./HomePage.css";

function HomePage(props) {
  function recipientUserMessage(userMessage) {
    props.onMessage(userMessage);
    // console.log("Homepage", user);
  }

  function recipientUserEmail(userEmail) {
    props.onEmail(userEmail);
  }

  return (
    <div className="homepage">
      <ProductSection
        onMessage={recipientUserMessage}
        onEmail={recipientUserEmail}
      />
    </div>
  );
}

export default HomePage;

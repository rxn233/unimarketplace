// import "./AboutUs.css";
import about_style from "./AboutUs.module.css";

function AboutUs() {
  // const navigate = useNavigate();

  return (
    <div className={about_style["main-aboutus"]}>
      <h3>About Us</h3>
      <p>
        Welcome to UniMarketPlace, a unique online platform dedicated to
        enhancing the university experience by facilitating the exchange of used
        and un-used products among students within the campus community. Our
        platform aims to foster a sustainable and collaborative environment,
        allowing university students to buy, sell, or donate/giveaway items they
        no longer need, while also connecting with fellow students to acquire
        products they desire.
      </p>
      <h3>What We Offer</h3>
      <ul>
        <li>
          <b>Secure University Authentication: </b>We understand the
          significance of safety and privacy on a university campus. Therefore,
          our platform ensures secure access by requiring university credentials
          for user authentication. A confirmation email will be sent to the
          university mail to validate the credentials, ensuring only verified
          students can participate.
        </li>
        <li>
          <b>Price Estimation: </b>We provide Machine learning model driven
          price estimation feature which will predict the prices of all products
          on the platform which will ensure that there is transparency
          throughout.
        </li>
      </ul>
    </div>
  );
}
export default AboutUs;

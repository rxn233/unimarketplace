// import "./AboutUs.css";
import about_style from "./AboutUs.module.css";

function AboutUs() {
  // const navigate = useNavigate();

  return (
    <div className={about_style["about-box"]}>
      <h2>About Us</h2>
      <div className={about_style["about-details"]}>
        <p>
          Welcome to UniMarketPlace, a unique online platform dedicated to
          enhancing the university experience by facilitating the exchange of
          used and un-used products among students within the campus community.
          Our platform aims to foster a sustainable and collaborative
          environment, allowing university students to buy, sell, or
          donate/giveaway items they no longer need, while also connecting with
          fellow students to acquire products they desire.
        </p>
        <h3>What We Offer</h3>
        <ul>
          <li>
            <b>Secure University Authentication: </b>We prioritise your safety
            and ensure that every user is a verified student of your university.
            Our rigorous authentication process involves sending a confirmation
            email to the university account, giving you peace of mind when
            connecting with fellow students.
          </li>
          <li>
            <b>User-Friendly Experience: </b>Our user-friendly platform allows
            you to list your items for sale, search for products you need, and
            connect with other students effortlessly. We've designed it with
            your convenience in mind.
          </li>
          <li>
            <b>Price Estimation with AI/ML: </b>In addition to facilitating
            transactions, we offer a cutting-edge price estimation feature
            powered by artificial intelligence and machine learning. This tool
            helps you make informed decisions about the value of your items,
            ensuring fair deals for everyone.
          </li>
        </ul>
      </div>
    </div>
  );
}
export default AboutUs;

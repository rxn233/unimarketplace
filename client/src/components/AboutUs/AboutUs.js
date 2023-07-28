import "./AboutUs.css";

function AboutUs() {
  // const navigate = useNavigate();

  return (
    <div className="main-aboutus">
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
      <h3>Our Mission</h3>
      <p>
        At UniMarketPlace, our mission is to create a vibrant and resourceful
        marketplace exclusively for university students, where they can
        conveniently share and acquire various products. By promoting a culture
        of reuse and sustainability, we strive to reduce waste, encourage
        responsible consumption, and build a stronger sense of community within
        the campus.
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
      </ul>
    </div>
  );
}
export default AboutUs;

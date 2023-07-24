import { Fragment } from "react";
import "./HomePage.css";
import ProductSection from "../ProductSection/ProductSection";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";

function HomePage() {
  return (
    <Fragment>
      <ProductSection />
      <AboutUs />
      <Footer />
    </Fragment>
  );
}

export default HomePage;

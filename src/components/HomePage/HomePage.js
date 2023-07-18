import { Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import "./HomePage.css";
import FilterSection from "../FilterSection/FilterSection";
import ProductSection from "../ProductSection/ProductSection";
import AboutUs from "../AboutUs/AboutUs";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

function HomePage(props) {
  return (
    <Fragment>
      <NavBar />

      <div className="main-container">
        <FilterSection className="filter-section" />
        <ProductSection className="product-section" products={props.products} />
      </div>
      <AboutUs />

      <Footer />
      <Login />
    </Fragment>
  );
}

export default HomePage;

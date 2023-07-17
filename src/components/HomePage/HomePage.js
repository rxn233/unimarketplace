import { Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import "./HomePage.css";
import ProductBox from "../ProductBox/ProductBox";

function HomePage(props) {
  return (
    <Fragment>
      <NavBar />
      <ProductBox products={props.products[0]} />
      <ProductBox products={props.products[1]} />
      <ProductBox products={props.products[2]} />
      <ProductBox products={props.products[3]} />
    </Fragment>
  );
}

export default HomePage;

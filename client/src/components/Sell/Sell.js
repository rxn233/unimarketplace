import React from "react";

function Sell() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <h1>Sell</h1>
      <label htmlFor="product_name">Enter the Product Name</label>
      <input type="text" name="product_name" id="product_name" required />
      <br />
      <label htmlFor="product_category">Enter the Product Category</label>
      <input type="text" name="product_category" id="product_category" />
      <br />
      <label htmlFor="product_brand">Enter the Product Brand</label>
      <input type="text" name="product_brand" id="product_brand" />
      <br />
      <label htmlFor="product_condition">Select the Product Condition</label>
      <input type="checkbox" name="product_condition" id="product_condition" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
      <br />
      <label htmlFor=""></label>
      <input type="" name="" id="" />
    </form>
  );
}

export default Sell;

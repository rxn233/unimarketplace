import HomePage from "./components/HomePage/HomePage";

const products = [
  {
    product_id: 1,
    product_name:
      "Lee posh Lactic Acid 60% Anti ageing Pigmentation Removing Glow Peel",
    product_category: "Skin Care",
    product_description:
      "PROFESSIONAL GRADE Face Peel: this peel stimulates collagen production, reducing the appearance of w...",
    product_price: 799,
  },
  {
    product_id: 2,
    product_name:
      "Harveys Crunchy & Creame Gourmet Delicacies Cream Wafer Biscuit 110 g Pouch Pack - Chocolate Flavou...",
    product_category: "Grocery & Gourmet Foods",
    product_description: "Harveys wafer Cream Wafer 110g. Made in India",
    product_price: 570,
  },
  {
    product_id: 3,
    product_name: "Black & Tan Beer Soap 4-Pack",
    product_category: "Bath & Shower",
    product_description:
      "Our handmade soaps are made with the highest grade glycerin, top grade essential oils, fragrance oil...",
    product_price: 200,
  },
  {
    product_id: 4,
    product_name:
      "Parag Fragrances Ambery Chandan Eau De Perfume 60ml (Unisex) Long Lasting Perfume With Imported Cry...",
    product_category: "Fragrance",
    product_description:
      "Parag Fragrances Ambery Chandan Eau De Perfume is Long Lasting Perfume By Parag Fragrance Which Are ...",
    product_price: 749,
  },
];

const users = [
  {
    student_id: 2479333,
    student_name: "Rohit Nair",
  },
  {
    student_id: 2479334,
    student_name: "Prashan Srivastava",
  },
  {
    student_id: 2479335,
    student_name: "Shashank Reddy",
  },
];

function App() {
  return (
    <div className="App">
      <HomePage products={products} />
    </div>
  );
}

export default App;

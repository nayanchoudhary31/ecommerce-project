import Header from "../../components/Header";
import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductGrid from "./ProductGrid";
function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      <title>Home - E-commerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header />
      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
}

export default HomePage;

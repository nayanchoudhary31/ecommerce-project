import Header from "../../components/Header";
import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductGrid from "./ProductGrid";
function HomePage() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    axios
      .get("/api/cart-items")
      .then((response) => {
        console.log("Cart items:", response.data);
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  return (
    <>
      <title>Home - E-commerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cartItems={cartItems} />
      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
}

export default HomePage;

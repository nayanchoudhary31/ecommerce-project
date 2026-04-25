import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import Checkout from "./pages//checkout/CheckoutPage";
import Orders from "./pages/orders/OrderPage";
import Tracking from "./pages/Tracking";
import NotFoundPage from "./pages/NotFoundPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/cart-items?expand=product")
      .then((response) => {
        console.log("Cart items:", response.data);
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cartItems={cartItems} />} />
      <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
      <Route path="/orders" element={<Orders cartItems={cartItems} />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

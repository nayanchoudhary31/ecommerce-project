import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import Checkout from "./pages//checkout/CheckoutPage";
import Orders from "./pages/OrderPage";
import Tracking from "./pages/Tracking";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

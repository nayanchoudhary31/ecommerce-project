import { useEffect, useState } from "react";
import CheckoutHeader from "./CheckoutHeader";
import "./CheckoutPage.css";
import axios from "axios";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
function Checkout({ cartItems }) {
  const [deliveryOptions, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        console.log("Delivery options:", response.data);
        setDeliveryOption(response.data);
      })
      .catch((error) => {
        console.error("Error fetching delivery options:", error);
      });

    axios
      .get("/api/payment-summary")
      .then((response) => {
        console.log("Payment summary:", response.data);
        setPaymentSummary(response.data);
      })
      .catch((error) => {
        console.error("Error fetching payment summary:", error);
      });
  }, []);
  return (
    <>
      <title>Checkout - E-commerce Project</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cartItems={cartItems}
            deliveryOptions={deliveryOptions}
          />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}

export default Checkout;

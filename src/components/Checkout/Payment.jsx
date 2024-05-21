import React, { useEffect } from "react";
import { MensData } from "../../Data/mens";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Paymentsuccess from "./Paymentsuccess";

const Payment = () => {
  const { id } = useParams();
  const selectedItem = MensData.find((item) => item.id == id);
  const amount = selectedItem.price;
  const navigate = useNavigate();
  useEffect(() => {
    handlePayment();
  }, []);
  const handlePayment = async () => {
    console.log(amount);
    try {
      const res = await fetch(`http://localhost:3000/api/payment/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
        }),
      });

      const data = await res.json();

      console.log(data);
      handlePaymentVerify(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaymentVerify = async (data) => {
    const options = {
      key: "rzp_test_PH4sMZMaizjRIb",
      amount: data.amount,
      currency: data.currency,
      name: "ActiveLife Store",
      description: "Test Mode",
      order_id: data.id,
      handler: async (response) => {
        console.log("response", response);
        try {
          const res = await fetch(`http://localhost:3000/api/payment/verify`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await res.json();

          if (verifyData.message) {
            toast.success(verifyData.message);
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#5f63b8",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    navigate("/payment-success");
  };

  return <div></div>;
};

export default Payment;

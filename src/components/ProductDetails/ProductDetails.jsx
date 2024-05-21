import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MensData } from "../../Data/mens";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function ProductDetails() {
  const { id } = useParams();
  const selectedItem = MensData.find((item) => item.id == id);
  // const [amount, setamount] = useState(10);
  // setamount(selectedItem.price);

  // comment
  const amount = selectedItem.price;

  const navigate = useNavigate();

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
      navigate(`/checkout/${id}`);
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
  };

  return (
    <div className="mx-auto w-[100vw]  bg-white shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex justify-between ">
        <div className="gap h-48 w-full object-cover md:h-full">
          <img
            className=" mt-12 Sh-48 w-full object-cover md:h-full "
            src={selectedItem.imageUrl}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            SOLSTICE
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            Men Boxy Fit Self Design Spread Collar Casual Shirt
          </h1>
          <p className="mt-2">
            <span className="text-green-500 font-semibold">
              {selectedItem.price}
            </span>{" "}
            <span className="line-through text-red-500">374</span>{" "}
            <span className="text-gray-500">62% Off</span>
          </p>
          <div className="mt-2 flex items-center">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="ml-2 text-gray-600">117 reviews</span>
          </div>
          <div className="mt-4">
            <span className="block text-gray-700">Size</span>
            <div className="mt-2 flex space-x-2">
              <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded">
                S
              </button>
              <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded">
                M
              </button>
              <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded">
                L
              </button>
              <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded">
                XL
              </button>
            </div>
          </div>
          <button
            onClick={handlePayment}
            className="mt-4 w-full bg-black text-white py-2 px-4 rounded"
          >
            Buy Now
          </button>
          <Toaster />
          <div className="mt-4">
            <h2 className="text-gray-700">Highlights</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-500">
              <li>Hand cut and sewn locally</li>
              <li>Dyed with our proprietary colors</li>
              <li>Pre-washed & pre-shrunk</li>
              <li>Ultra-soft 100% cotton</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

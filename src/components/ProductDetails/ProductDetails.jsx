import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MensData } from "../../Data/mens";

import toast, { Toaster } from "react-hot-toast";

function ProductDetails() {
  const { id } = useParams();
  const selectedItem = MensData.find((item) => item.id == id);
  // const [amount, setamount] = useState(10);
  // setamount(selectedItem.price);

  // comment

  const navigate = useNavigate();

  const handlePayment = async () => {
    navigate(`/checkout/${id}`);
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
            {selectedItem.description}
          </h1>
          <p className="mt-2">
            <span className="text-green-500 font-semibold">
              {selectedItem.price}
            </span>{" "}
            <span className="line-through text-red-500">
              {selectedItem.originalPrice}
            </span>{" "}
            <span className="text-gray-500">{selectedItem.discount}</span>
          </p>
          <div className="mt-2 flex items-center">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="ml-2 text-gray-600">117 reviews</span>
          </div>
          <div className="mt-4">
            <span className="block text-gray-700">Size</span>
            <div className="mt-2 flex space-x-2">
              <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded hover:bg-gray-500">
                S
              </button>
              <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded  hover:bg-gray-500">
                M
              </button>
              <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded  hover:bg-gray-500">
                L
              </button>
              <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded  hover:bg-gray-500">
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

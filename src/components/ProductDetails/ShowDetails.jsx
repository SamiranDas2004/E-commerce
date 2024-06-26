import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ShoesData} from '../../Data/show';
function ShowDetails() {

const navigate=useNavigate();


  const { id } = useParams();
  const handelClick=()=>{

  
    navigate(`/shoe/checkout/${id}`)
  }

  const selectedItem = ShoesData.find(item => item.id == id);

  
  return (
    <div className="mx-auto w-[100vw]  bg-white shadow-md overflow-hidden md:max-w-2xl">
    <div className="flex justify-between ">
      <div className="gap h-48 w-full object-cover md:h-full">
        <img className=" mt-12 Sh-48 w-full object-cover md:h-full " src={selectedItem.imageUrl} />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">SOLSTICE</div>
        <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Men Boxy Fit Self Design Spread Collar Casual Shirt</h1>
        <p className="mt-2">
          <span className="text-green-500 font-semibold">999</span>{" "}
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
            <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded">S</button>
            <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded">M</button>
            <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded">L</button>
            <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded">XL</button>
          </div>
        </div>
        <button 
        onClick={handelClick}
        className="mt-4 w-full bg-black text-white py-2 px-4 rounded">Buy Now</button>
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

export default ShowDetails;

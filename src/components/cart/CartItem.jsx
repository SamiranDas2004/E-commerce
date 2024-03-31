import React from "react";
import IconButton from '@mui/material/IconButton'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@mui/material";

function CartItem() {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[8rem] lg:w-[9rem] lg:h-[7rem]">
          <img src="https://rukminim2.flixcart.com/image/1000/1000/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=70&crop=false" />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Mens slim solid T-shirt</p>
          <p className="opacity-70">Size: L,White</p>
          <p className="opacity-70 mt-2">seller:Crishtails</p>
          <p className=" font-semibold">199</p>
          <p className="opacity-50 line-through ">266</p>
          <p className=" text-green-600 font-semibold">5% Off</p>
        </div>
      </div>
      <div className=" lg:flex items-center lg:space-x-10 pt-4">
      <div className="lg:flex items-center mt-9 space-x-2">
      <IconButton >
        <RemoveCircleOutlineIcon/>
      </IconButton>

      <span className="py-1 px-7 border rounded-sm"> 
    7
      </span>

      <IconButton>
      <AddCircleOutlineIcon/>
      </IconButton>
      <div>
        <Button>remove</Button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default CartItem;

import React from "react";
import Address from "./Address";
import CartItem from "../cart/CartItem";
import {Button} from '@mui/material'

function Order() {
  return <div className=" p-5 shadow-lg rounded-s-md border">
    <Address/>
    <div>
    <div className=' lg:grid grid-cols-3 lg:px-16 relative'>
    <div className=' col-span-2'>
    {[1,1,1,1,1,1].map((item)=><CartItem/>)}
    </div>
     
     <div className=' px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
     <div className='border'>
     <p className=' uppercase font-bold opacity-60 pb-4'>
      Price Details 
     </p>
     
     <hr/>
     <div className=' space-y-3 font-semibold'>
      <div className=' flex justify-between pt-3 text-black '>
      <span>Price</span>
      <span>6666</span>
      </div>




      <div className=' flex justify-between pt-3  '>
      <span>Discount</span>
      <span>6666</span>
      </div>



      <div className=' flex justify-between pt-3  '>
      <span>Delivery Charges </span>
      <span  className='text-green-600'>6666</span>
      </div>


      <div className=' flex justify-between pt-3  '>
      <span>Total price</span>
      <span className='text-green-600 font-bold'>6666</span>
      </div>
     </div>
     <Button variant="contained" className='w-full mt-8'  sx={{px:"2rem", py:"1rem", bgcolor:"#9155fd"}}>Checkout</Button>
     </div>
    
     </div>

    </div>
    </div>
  </div>;
}

export default Order;

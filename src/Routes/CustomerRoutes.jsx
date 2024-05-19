import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage/Homepage'
import Cart from '../components/cart/Cart'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Checkout from '../components/Checkout/Checkout'
import AddDeliveryAddressForm from '../components/Checkout/AddDeliveryAddressForm'
import OrderDetails from '../components/order/OrderDetails'
import OrderCard from '../components/order/OrderCard'
import OrderTracker from '../components/order/OrderTracker'
import Order from '../components/order/Order'

function CustomerRoutes() {
  return (
//     <div>
//         <div>
// <Navbar/>
//         </div>
//         <Routes>
//             <Route path='/' element={<Homepage/>}></Route>
//             <Route path='/cart' element={<Cart/>}></Route>
//             <Route path='/women' element={<Product/>}></Route>

//             {/* <Homepage/> */}
//       {/* <div><Product/></div> */}

//       {/* <ProductDetails/> */}
//       {/* <Cart/> */}
//       {/* <Checkout/> */}

//       {/* <Order/> */}

//       {/* <OrderDetails/> */}
//         </Routes>
//         <div>
//             <Footer/>
//         </div>
//     </div>

    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/women' element={<Product/>}></Route>

        <Route path='/men/productDetails/:id' element={<ProductDetails />} />


        <Route path='/men' element={<Product/>}></Route>

        <Route path='/men/cart/:id' element={<Cart />} />
        <Route path='/checkout/:ide' element={<Checkout/>}></Route>
      </Routes>
      <Footer/>

    </>

  )
}

export default CustomerRoutes
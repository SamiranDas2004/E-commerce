import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage/Homepage'
import Cart from '../components/cart/Cart'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'

function CustomerRoutes() {
  return (
    <div>
        <div>
<Navbar/>
        </div>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/women' element={<Product/>}></Route>

            {/* <Homepage/> */}
      {/* <div><Product/></div> */}

      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}

      {/* <Order/> */}

      {/* <OrderDetails/> */}
        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRoutes
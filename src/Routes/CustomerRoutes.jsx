import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Cart from "../components/cart/Cart";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/Product";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Contact from "../components/Contact/Contact";
import Checkout from "../components/Checkout/Checkout";
import AddDeliveryAddressForm from "../components/Checkout/AddDeliveryAddressForm";
import OrderDetails from "../components/order/OrderDetails";
import OrderCard from "../components/order/OrderCard";
import OrderTracker from "../components/order/OrderTracker";
import Order from "../components/order/Order";
import RegisterForm from "../State/Auth/RegisterForm";
import LoginForm from "../State/Auth/LoginForm";
import Show from "../components/Product/Show";
import ShowDetails from "../components/ProductDetails/ShowDetails";
import ShoeCheckout from "../components/Checkout/ShoeCheckOut";
import Paymentsuccess from "../components/Checkout/Paymentsuccess";

function CustomerRoutes() {
  return (
    //     <div>
    //         <div>
    // <Navbar/>
    //         </div>
    //         <Routes>a
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/shoe/productDetails/:id"
          element={<ShowDetails />}
        ></Route>
        <Route path="/auth/signup" element={<RegisterForm />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/men/productDetails/:id" element={<ProductDetails />} />
        <Route path="/contact-us" element={<Contact />} />

        <Route path="/men" element={<Product />}></Route>
        <Route path="/shoe" element={<Show />}></Route>

        <Route path="/payment-success" element={<Paymentsuccess />} />
        <Route path="/checkout/:id" element={<Checkout />}></Route>
        <Route path="/shoe/checkout/:ide" element={<ShoeCheckout />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default CustomerRoutes;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Cable } from "@mui/icons-material";
import Cart from "./components/cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Order from "./components/order/Order";
import OrderDetails from "./components/order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routes/CustomerRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <Routes>
        <Route path="/*" element={<CustomerRoutes/>}/>
      </Routes>
      </div>
      
      <div>
       
      </div>
    </>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Product from './components/Product/Product'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { Cable } from '@mui/icons-material'
import Cart from './components/cart/Cart'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div><Navbar/></div>
{/* <div><Product/></div> */}

{/* <ProductDetails/> */}
<Cart/>
    <div><Footer/></div>
    </>
  )
}

export default App

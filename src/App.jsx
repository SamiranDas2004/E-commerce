import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div><Navbar/></div>
    <div><Homepage/></div>
    </>
  )
}

export default App

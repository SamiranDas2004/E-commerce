import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginForm() {

    const [user,setUser]=useState({
        email:'',
        password:''
    });

    const notify = () => toast("Login successful!");
    const error = () => toast("wrong password or email");

    const [loading,setLoading]=useState(false);
    const navigate=useNavigate()

 const handelLogin=async()=>{
   try {

    setLoading(true)
    const response= await axios.post('http://localhost:3000/auth/login',user)
    if (response.status === 200) {
        notify();
      } else {
        error();
      }
  
   console.log( response.data);
   setTimeout(() => {
    navigate('/');
}, 6000);
   } catch (error) {
    throw new Error(error.message)
   }
   finally{
    setLoading(false)
   }

 }


 useEffect(()=>{
    if(!loading){
       setUser({
        email:'',
        password:''
       })
    }
 },[loading])


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              value={user.email}
              onChange={(e)=>setUser({...user,email:e.target.value})}
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={user.password}
              onChange={(e)=>setUser({...user,password:e.target.value})}
              placeholder="******************"
            />
            <p className="text-blue-500 text-xs italic">Enter your Password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handelLogin}
            >
              LogIn
            </button>
            <ToastContainer 
          position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce
          
           />
          
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;

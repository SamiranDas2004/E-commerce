import React, { useEffect, useState } from 'react';
import { setUserData } from '../../../src/components/features/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const notify = () => toast("Registration successful!");

  const handleNavigate = () => {
    navigate('/auth/login');
  };

  const changeName = () => {
    dispatch(setUserData({ username: user.username, email: user.email }));
    console.log(user.username, user.email);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/auth/signup', user);
      notify();
      console.log(response.data);
      changeName(); // Dispatch the Redux action here
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      setUser({
        username: '',
        email: '',
        password: ''
      });
    }
  }, [loading]);

  return (
    <form className="flex flex-col items-center justify-center h-screen">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
            id="inline-full-name" 
            type="text" 
            placeholder="User Name" 
            value={user.username} 
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
            id="inline-email" 
            type="text" 
            placeholder="Email" 
            value={user.email} 
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
            id="inline-password" 
            type="password" 
            placeholder="******************" 
            value={user.password} 
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <div className="flex gap-4">
            <div className="md:w-2/3">
              <button 
                onClick={handleSubmit} 
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                type="button"
              >
                Sign Up
              </button>
            </div>
            <button 
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
              type="button" 
              onClick={handleNavigate}
            >
              Login
            </button>
          </div>
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
            transition="bounce"
          />
          <p className="text-xs">If you are already signed up, then click on the Login button</p>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;

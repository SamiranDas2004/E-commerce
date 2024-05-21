// Address.jsx
import React from 'react';
import { useSelector } from 'react-redux';

function Address() {
  // const username = useSelector(state => state.user.username); // Access state.user.username
  // const email = useSelector(state => state.user.email); // Access state.user.email

  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold'>
          {/* {username} */}
        </p>
        <p>Mumbai, balurghat, 72202</p>
      </div>
      <div className='space-y-1'>
        <p className='font-semibold'>
          {/* {email} */}
        </p>
        <p>848484848</p>
      </div>
    </div>
  );
}

export default Address;

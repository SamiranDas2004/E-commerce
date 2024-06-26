import React from 'react';
import { MensData } from '../../Data/mens';
import Productcard from './Productcard';
import './Productcard.css'; // Import the CSS file

export function Product() {
  return (
    <div className="product-grid">
      {MensData.map((item) => (
        <div key={item.id} className="product-grid-item">
          <Productcard Items={item} />
        </div>
      ))}
    </div>
  );
}

export default Product;

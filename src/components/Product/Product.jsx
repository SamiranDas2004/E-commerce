import React from 'react';
import { MensData } from '../../Data/mens';
import Productcard from './Productcard';

export function Product() {
  return (
    <div>
      {MensData.map((item) => (
        <div key={item.id}> {/* Use a unique key for each item */}
          <Productcard Items={item} />
        </div>
      ))}
    </div>
  );
}

export default Product;

import React from 'react';
import { ShoesData} from '../../Data/show';
import Productcard from './Productcard';
import './Productcard.css'; // Import the CSS file
import ShowCard from './ShowCard';

export function Show() {
  return (
    <div className="product-grid">
      {ShoesData.map((item) => (
        <div key={item.id} className="product-grid-item">
          <ShowCard Items={item} />
        </div>
      ))}
    </div>
  );
}

export default Show;

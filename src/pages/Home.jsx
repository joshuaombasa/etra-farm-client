import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page page-height">
      <div className="home-page-container">
        <h1>
          From Seeding to Harvest, We Equip Your Farm. Rent Equipment Today.
        </h1>
        <p>
          Struggling to find the farm equipment you need? Look no further than
          Electra! We offer a comprehensive selection of high-quality farm
          equipment for rent, ensuring you have the right tools to tackle any
          task efficiently.
        </p>
        <Link to="/equipment" className='van-links'>Find your equipment</Link>
      </div>
    </div>
  );
}

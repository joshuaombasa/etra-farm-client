import React from 'react';
import { Link } from 'react-router-dom';
import machineImage from '../assets/machineImage.jpeg';




export default function VendorEquipmentCard() {
  return (
    <Link to="1" className="vendor-eq-card">
      <img src={machineImage} alt="" />
      <div className="card-info">
        <h3>Great Plains</h3>
        <span>$300/day</span>
      </div>
    </Link>
  );
}


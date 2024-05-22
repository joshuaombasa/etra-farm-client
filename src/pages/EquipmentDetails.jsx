import React from 'react';
import { Link } from 'react-router-dom';
import machineImage from '../assets/machineImage.jpeg';

export default function EquipmentDetails() {
  return (
    <div className="equipment-details-page page-height">
      <div className="equipment-details-page-container">
        <Link className="back-link">&larr; Back to all Equipemnt</Link>
        <img src={machineImage} alt="" />
        <span>Tillage</span>
        <h1>Great Plains</h1>
        <h3>$300/day</h3>
        <p>
          Great Plains has built a reputation for manufacturing durable plows,
          harrows, and cultivators that can withstand even the most demanding
          conditions. Their equipment is known for its effectiveness in seedbed
          preparation and soil management, ensuring a strong foundation for your
          crops.
        </p>
        <Link to="." className="van-links">
          Rent this machine
        </Link>
      </div>
    </div>
  );
}

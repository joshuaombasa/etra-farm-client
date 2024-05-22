import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import machineImage from '../../assets/machineImage.jpeg';
export default function SelectedVendorMachine() {
  return (
    <div className="selected-vendor-machine-page">
      <div className="selected-vendor-machine-page-container">
        <Link className="back-link">&larr; Back to all Equipemnt</Link>
        <div className="top-area">
          <img src={machineImage} alt="" />
          <div className="top-area-info">
            <span>Tillage</span>
            <h1>Great Plains</h1>
            <h3>$300/day</h3>
          </div>
        </div>
        <div className="update-machine">
          <nav className="update-machine-nav">
            <Link to=".">Details</Link>
            <Link to="pricing">Pricing</Link>
            <Link to="photos">Photos</Link>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

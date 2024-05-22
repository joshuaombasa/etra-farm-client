import { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import VendorLayout from './components/VendorLayout';
import VendorMachineDetails from './components/VendorMachineDetails';
import VendorMachinePhotos from './components/VendorMachinePhotos';
import VendorMachinePricing from './components/VendorMachinePricing';
import About from './pages/About';
import EquipmentDetails from './pages/EquipmentDetails';
import Equipments from './pages/Equipments';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/vendor/Dashboard';
import Income from './pages/vendor/Income';
import Reviews from './pages/vendor/Reviews';
import SelectedVendorMachine from './pages/vendor/SelectedVendorMachine';
import VendorEquipment from './pages/vendor/VendorEquipment';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="equipment" element={<Equipments />} />
        <Route path="equipment/:id" element={<EquipmentDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="vendor" element={<VendorLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="equipment" element={<VendorEquipment />} />
          <Route path="equipment/:id" element={<SelectedVendorMachine />}>
            <Route index element={<VendorMachineDetails />} />
            <Route path="pricing" element={<VendorMachinePricing />} />
            <Route path="photos" element={<VendorMachinePhotos />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

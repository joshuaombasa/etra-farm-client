import React from 'react'
import VendorEquipmentCard from '../../components/VendorEquipmentCard'

export default function VendorEquipment() {
  return (
    <div className='vendor-equipment-page'>
      <h1>Your listed machinery</h1>
      <div className="vendor-equipment-list">
        <VendorEquipmentCard/>
        <VendorEquipmentCard/>
        <VendorEquipmentCard/>
        <VendorEquipmentCard/>
      </div>
    </div>
  )
}

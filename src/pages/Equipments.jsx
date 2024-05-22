import React from 'react'
import MachineryCard from '../components/MachineryCard'

export default function Equipments() {
  return (
    <div className='equipment-page page-height'>
      <div className="equipment-page-container">
        <h1>Equip Your Farm for Success: Browse Our Extensive Inventory</h1>
        <nav className="equipment-nav">
          <button>Tillage</button>
          <button>Planting</button>
          <button>Cultivation</button>
          <button>Harvesting</button>
          <button>Clear filters</button>
        </nav>
        <div className="equipment-list">
        <MachineryCard/>
        <MachineryCard/>
        <MachineryCard/>
        <MachineryCard/>
        <MachineryCard/>
        <MachineryCard/>
      </div>
      </div>
    </div>
  )
}

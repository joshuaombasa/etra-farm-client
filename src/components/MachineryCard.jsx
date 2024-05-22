import React from 'react'
import { Link } from 'react-router-dom'
import machineImage from '../assets/machineImage.jpeg'

export default function MachineryCard() {
  return (
    <Link to="1" className='machinery-card'>
      <img src={machineImage} alt="" />
      <div className="some-info">
        <h3>Great Plains</h3>
        <h3>$300/day</h3>
      </div>
      <span>Tillage</span>
    </Link>
  )
}

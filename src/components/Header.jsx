import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header'>
      <Link className="logo">Electra</Link>
      <nav className="main-nav">
        <Link to="about">About</Link>
        <Link to="vendor">Vendor</Link>
        <Link to="equipment">Equipment</Link>
        <Link to="login">Login</Link>
      </nav>
    </div>
  )
}

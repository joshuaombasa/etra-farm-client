import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='about-page  page-height'>
      <div className="about-page-container">
        <h1>About Us: Equipping Farms for Success</h1>
        <p>At Electra, we're passionate about supporting farmers. We understand the challenges you face, from tight budgets and unpredictable weather to the ever-changing demands of the market. That's why we offer a comprehensive selection of high-quality farm equipment rentals, designed to empower you to get the most out of every season.</p>

        <div className="cta">
          <h3>Join Our Growing Network!</h3>
          <p>We're proud to partner with a community of successful farmers across the region. We invite you to join our network and experience the difference Electra can make for your farm</p>
          <Link to="/equipment" className='van-links'>Get a Quote Today!</Link>
        </div>
      </div>
    </div>
  )
}

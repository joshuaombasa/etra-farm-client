import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <div classname="oulet-container" style={{ margin: '0 auto'}}>
      <Header/>
      <Outlet/>
      <Footer/> 
    </div>
  )
}

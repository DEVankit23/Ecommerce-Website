import React from 'react'
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar1 title=""/>
      <Navbar2 />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
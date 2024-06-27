import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsSearch, BsCart3 } from "react-icons/bs";
import { AiOutlineAmazon } from "react-icons/ai";
const Navbar1 = (props) => {

  const textStyle = ({ isActive }) => {
    return {
      color: isActive ? "#5f99be" : "#fff",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: 'none',
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <div className="container-fluid">
        <a className="navbar-brand nav-item fs-2 fw-bold" href="/"><AiOutlineAmazon />{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mt-1 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" style={textStyle} aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={textStyle} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={textStyle} to="/store">Store</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={textStyle} to="/contact">Contact Us</NavLink>
            </li>
          </ul>
          <div className="input-group me-4 my-2">
            <input type="text" className="form-control py-2" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
            <span className="input-group-text" id="basic-addon2"><BsSearch className='fs-5' /></span>
          </div>
          <NavLink to="./cart" className='text-white cart-trolley--link me-4 fs-3'>
            <BsCart3 className='cart-trolley' />
            <span className='cart-trolley-item text-white me-1 fs-6'> 10 </span>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar1
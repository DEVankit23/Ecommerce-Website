import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiPhoneCall } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoReorderFourSharp, IoPersonOutline } from "react-icons/io5";

export default function Navbar2(props) {

  return (
    <>
      <header className="header-top-strip">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="dropdown text-center text-white mt-1 mb-1">
                <button className="btn btn-secondary btn-sm dropdown-toggle bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <IoReorderFourSharp className='fs-5 pb-1 me-2' />
                  <span className='me-4 d-inline-block'>Shop Catagories</span>
                </button>
                <ul className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item text-white" href="/">Action</a></li>
                  <li><a className="dropdown-item text-white" href="/">Another action</a></li>
                  <li><a className="dropdown-item text-white" href="/">Something else here</a></li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <p className='text-center mt-1 mb-0'>
                <span className='wishlist-text text-white me-1'>Wishlist</span>
                <NavLink className='text-white'>
                  <MdFavoriteBorder className='me-4 fs-5' />
                </NavLink>
                <NavLink to="/login" className='text-white'>
                  <span className="text-white me-1">Log in</span>
                  <IoPersonOutline className='me-5 fs-5' />
                </NavLink>
                <NavLink to="/contact" className='toll-free-number text-white'>
                  <BiPhoneCall /> Toll free (033-65679-52349)
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

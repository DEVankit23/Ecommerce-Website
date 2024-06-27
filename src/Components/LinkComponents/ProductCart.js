import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import React from 'react';
import { MdOutlineFavoriteBorder } from "react-icons/md";

const ProductCart = (props) => {

  const { grid } = props
  let location = useLocation();

  return (
    <>
      <div className={`${location.pathname === "/store" ? `col-${grid}` : "col-3"}`}>
        <Link className="container product-cart position-relative pb-4">
          <div className="product-top d-flex justify-content-between mt-3">
            <p className='px-2'>-5%</p>
            <div className="icons">
              <MdOutlineFavoriteBorder className='fs-4' />
            </div>
          </div>
          <div className="cart-image py-3">
            <img src="images/cart/headphone-cart.png" alt="product-cart" />
          </div>
          <div className="product-brands">
            <h6 className='brand'>Nikon</h6>
          </div>
          <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
          <div className="product-details py-2">
            <h6>Lorem ipsum dolor sit ametkm conse adipisicing elit.</h6>
          </div>
          <h6 className='price'>$100.00</h6>
        </Link>
      </div>
    </>
  )
}

export default ProductCart
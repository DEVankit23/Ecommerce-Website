import React from 'react'

const Product = () => {
  return (
    <>
      <div className="product-page col-3">
        <div className="card product-card mx-2">
          <img src="images/cart/macbook.png" style={{ "width": "80%" }} className="products-image ms-4" alt="..." />
          <div className="card-img-overlay product-content">
            <p className="card-text mb-1">STUDIO DISPLAY</p>
            <h5 className="card-title"><b>600Nits Brightness.</b></h5>
            <p className="card-text">10 inch 4K Retina display.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
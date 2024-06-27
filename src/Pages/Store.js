import React, { useState } from 'react'
import ProductCart from '../Components/LinkComponents/ProductCart';
import { TfiAlignJustify, TfiLineDouble } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";
import { Link } from 'react-router-dom'
import BreadCumb from '../Components/BreadCumb';

const Store = () => {

  const [grid, setGrid] = useState(0);
  // alert(grid)

  return (
    <>
      <BreadCumb title="Our Store" />
      <div className="home-page-2 store-wrapper card-wrapper">
        <div className="container-xxl pt-4">
          <div className="row">
            
            <div className="col-3">
              <div className="filter-card">
                <h3 className="filter-title">Dashboard</h3>
                <div className="filter-product">
                  <div className="link ps-0 text-secondary">
                    <div>
                      <Link to="/">Home</Link>
                    </div>
                    <div>
                      <Link to="/about">About us</Link>
                    </div>
                    <div>
                      <Link to="/store">Our Store</Link>
                    </div>
                    <div>
                      <Link to="/contact">Contact us</Link>
                    </div>
                    <div>
                      <Link to="/cart">Your Cart</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-card">
                <h3 className="filter-title">Filter By</h3>
                <div className="sub-card py-1">
                  <div className="sub-title">
                    <h6 className='pb-1'>Availability</h6>
                  </div>
                  <div className="check-box">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                      <label className="form-check-label" htmlFor="flexCheckDefault1">
                        In stock(0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                      <label className="form-check-label" htmlFor="flexCheckDefault2">
                        Out of stock(0)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="sub-card py-3">
                  <div className="sub-title">
                    <h6 className='py-1'>Price</h6>
                  </div>
                  <div className="form-input d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label htmlFor="floatingInput">from</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput1" placeholder="name@example.com" />
                      <label htmlFor="floatingInput1">to</label>
                    </div>
                  </div>
                </div>
                <div className="sub-card py-3">
                  <div className="sub-title">
                    <h6 className='pb-1'>Colors</h6>
                  </div>
                  <div className="colors col-7">
                    <ul className="d-flex flex-wrap ps-0 gap-7">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="filter-card">
                <h3 className="filter-title">Product Tags</h3>
                <div className="filter-product d-flex flex-wrap align-items-center gap-7">
                  <span className="badge bg-light text-secondary px-3 py-2">Laptop</span>
                  <span className="badge bg-light text-secondary px-3 py-2">Speaker</span>
                  <span className="badge bg-light text-secondary px-3 py-2">Camera</span>
                  <span className="badge bg-light text-secondary px-3 py-2">Mobile</span>
                  <span className="badge bg-light text-secondary px-3 py-2">SmartWatch</span>
                  <span className="badge bg-light text-secondary px-3 py-2">TVs</span>
                  <span className="badge bg-light text-secondary px-3 py-2">Airpods</span>
                  <span className="badge bg-light text-secondary px-3 py-2">Gaming</span>
                </div>
              </div>

              <div className="filter-card">
                <h3 className="filter-title">Searched Products</h3>
              </div>
            </div>

            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex align-items-center justify-content-between gap-10">
                  <div className="d-flex align-items-center gap-10">
                    <span style={{ "minWidth": "58px" }}>Sort By :</span>
                    <select className="form-select" aria-label="Default select example">
                      <option value="manual">Featured</option>
                      <option defaultValue="best-selling">Best selling</option>
                      <option value="title-ascending">Alphabetically A-Z</option>
                      <option value="title-descending">Alphabetically Z-A</option>
                      <option value="price-ascending">Price low to high</option>
                      <option value="price-descending">Price high to low</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <span className="total-product text-secondary">21 Products</span>
                    <div className="product-icons d-flex align-items-center gap-7">
                      <div className='icon'>
                        <TfiAlignJustify onClick={() => setGrid(3)} />
                      </div>
                      <div className='icon'>
                        <VscMenu onClick={() => setGrid(4)} />
                      </div>
                      <div className='icon'>
                        <TfiLineDouble onClick={() => setGrid(6)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list py-4">
                <div className="d-flex gap-10">
                  <ProductCart grid={grid} />
                  <ProductCart grid={grid} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Store

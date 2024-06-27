import React from 'react'
import Marquee from "react-fast-marquee";
import BlogCard from '../Components/LinkComponents/BlogCard';
import { Link } from 'react-router-dom';
import { BsTruck, BsCreditCard, BsHeadset } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import ProductCart from '../Components/LinkComponents/ProductCart';
import Product from '../Components/LinkComponents/Product';


const Home = () => {
  return (
    <>
      <section className="home-page-1 py-4">
        <div className="container-xxl">
          <div className="row banner p-3">
            <div className="col-6">
              <div className="main-banner position-relative p-3 rounded-3">
                <img src="images/macbook-pro.png" alt="main-banner" />
                <div className="main-banner-content position-absolute">
                  <h4 className='fs-2'>Macbook Pro</h4>
                  <h5>Order now.</h5>
                  <p>From 89,000</p>
                  <Link className='text-white bg-dark py-1 px-2'>Buy Now</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="small-banners position-relative d-flex flex-wrap justify-content-between align-items-center">

                <div className="row g-1">
                  <div className="col-6">
                    <div className="border banner-1 py-2 ps-0 rounded-3">
                      <img src="images/apple-watch.png" alt="apple-watch" />
                      <div className="small-banner-content position-absolute text-dark">
                        <h4>Smart Watch</h4>
                        <p>From 24,000</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="border banner-2 rounded-3">
                      <img src="images/iphone-13(1).png" alt="iphone" className='ms-3 py-2' />
                      <div className="small-banner-content position-absolute text-dark">
                        <h4>iPhone 14</h4>
                        <p>From 89,000</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="border banner-3 py-2 rounded-3">
                      <img src="images/airpods.png" alt="airpods" />
                      <div className="small-banner-content position-absolute text-dark">
                        <h4>Airpods</h4>
                        <p>From 19,000</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="border banner-4 py-2 px-1 rounded-3">
                      <img src="images/ipad.png" alt="ipad" className='p-2' />
                      <div className="small-banner-content position-absolute text-dark">
                        <h4>iPad Air</h4>
                        <p>From 29,000</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-page-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">

                <div className='d-flex align-items-center gap-15'>
                  <BsTruck className='fs-2' />
                  <div>
                    <h6 className='mb-0 mt-3'>Free Shipping</h6>
                    <p>Order above 500</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15'>
                  <MdOutlineLocalOffer className='fs-2' />
                  <div>
                    <h6 className='mb-0 mt-3'>Daily Offers</h6>
                    <p>Save upto 40% off</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15'>
                  <BsHeadset className='fs-2' />
                  <div>
                    <h6 className='mb-0 mt-3'>Support 24/7</h6>
                    <p>Contact us on our toll-free</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15'>
                  <BsCreditCard className='fs-2' />
                  <div>
                    <h6 className='mb-0 mt-3'>Make Payments</h6>
                    <p>Your payment is secured with us</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-page-2 pt-3 pb-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap align-items-center justify-content-between">

                <div className="category-box d-flex align-items-center gap-20">
                  <img src="images/laptop.png" alt="Trimmer" />
                  <div>
                    <h5>Computers & Laptops</h5>
                    <p>10 items available</p>
                  </div>
                </div>

                <div className="category-box d-flex align-items-center gap-30">
                  <img src="images/Headphone.png" alt="Headphone" />
                  <div>
                    <h5 className='pt-2'>Headphones</h5>
                    <p>5 items available</p>
                  </div>
                </div>

                <div className="category-box d-flex align-items-center gap-20 py-4">
                  <img src="images/DSLR.png" alt="DSLR" />
                  <div>
                    <h5>Cameras & Lens</h5>
                    <p>8 items available</p>
                  </div>
                </div>

                <div className="category-box d-flex align-items-center  gap-20">
                  <img src="images/Joystick.png" alt="Speaker" />
                  <div>
                    <h5>Gaming & Music</h5>
                    <p>4 items available</p>
                  </div>
                </div>

                <div className="category-box even-box d-flex align-items-center gap-20">
                  <img src="images/Speaker.png" alt="Speaker" />
                  <div>
                    <h5>Blutooth Speakers</h5>
                    <p>10 items available</p>
                  </div>
                </div>

                <div className="category-box d-flex align-items-center gap-10">
                  <img src="images/Samsung-phone.png" alt="phone" />
                  <div>
                    <h5>Mobile Phones</h5>
                    <p>4 items available</p>
                  </div>
                </div>

                <div className="category-box d-flex align-items-center gap-30">
                  <img src="images/android TV.png" alt="TV" />
                  <div>
                    <h5>Android TVs</h5>
                    <p>12 items available</p>
                  </div>
                </div>

                <div className="category-box even-box justify-content-center d-flex align-items-center gap-20">
                  <img src="images/Washing-Machine.png" alt="WA-Machine" />
                  <div>
                    <h5 className='pe-3'>Home appliances</h5>
                    <p>15 items available</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-page-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="card-wrapper d-flex products">
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </section>

      <section className='home-page-2 py-4'>
        <div className="container-xxl position-relative">
          <div className="col-12 heading d-flex align-items-center justify-content-between py-3">
            <h4>Features & Offers</h4>
            <div className="icons">
              <MdKeyboardArrowLeft />
              <MdKeyboardArrowRight />
            </div>
          </div>

          <div className="row">
            <div className="col-9 card-wrapper d-flex gap-20">
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
              <ProductCart />
            </div>
          </div>
        </div>
      </section>

      <section className="home-page-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-wrapper align-items-center justify-content-between">

                <Marquee className='brands d-flex'>
                  <div className='px-3'>
                    <img src="images/brands/cannon-logo.png" alt="brand" />
                  </div>
                  <div className='px-1'>
                    <img src="images/brands/intel-logo.png" alt="brand" />
                  </div>
                  <div className='px-4 even-box'>
                    <img src="images/brands/JBL-logo.png" alt="brand" />
                  </div>
                  <div className='px-3'>
                    <img src="images/brands/LG-logo.png" alt="brand" />
                  </div>
                  <div className='ps-3 pt-3'>
                    <img src="images/brands/sony-logo.png" alt="brand" />
                  </div>
                  <div>
                    <img src="images/brands/apple-logo.png" alt="brand" />
                  </div>
                  <div className='px-3'>
                    <img src="images/brands/Lenovo-logo.png" alt="brand" />
                  </div>
                  <div className='px-3'>
                    <img src="images/brands/samsung-logo.png" alt="brand" />
                  </div>
                  <div className='px-3'>
                    <img src="images/brands/dell-logo.png" alt="brand" />
                  </div>
                </Marquee>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-page-2 py-4'>
        <div className="container-xxl">
          <div className="heading d-flex align-items-center justify-content-between py-3">
            <h4>Latest News</h4>
            <div className="icons">
              <MdKeyboardArrowLeft />
              <MdKeyboardArrowRight />
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home